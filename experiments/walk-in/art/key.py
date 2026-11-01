# Cut a flat chroma background out of a generated layer and save a transparent WebP.
# Usage: python3 key.py in.png out.webp magenta|green [crop_bottom_px]
import sys
import numpy as np
from PIL import Image
src, dst, mode = sys.argv[1:4]
crop_bottom = int(sys.argv[4]) if len(sys.argv) > 4 else 0
a = np.asarray(Image.open(src).convert('RGB')).astype(np.float32)
r, g, b = a[..., 0], a[..., 1], a[..., 2]
if mode == 'magenta':
    score = np.minimum(r, b) - g          # high for magenta
else:
    score = g - np.maximum(r, b)          # high for green
alpha = np.clip((160 - score) / (160 - 70), 0, 1)   # score >=160 fully gone, <=70 kept
# despill the fringe
fringe = (alpha < 1) & (alpha > 0)
if mode == 'magenta':
    m = np.minimum(np.minimum(r, b), g + 40)
    r = np.where(fringe, m, r); b = np.where(fringe, m, b)
else:
    g = np.where(fringe, np.minimum(g, np.maximum(r, b) + 20), g)
out = np.dstack([r, g, b, alpha * 255]).astype(np.uint8)
if crop_bottom:
    out[-crop_bottom:, :, 3] = 0
Image.fromarray(out, 'RGBA').save(dst, 'WEBP', quality=88, method=6)
ys, xs = np.nonzero(out[..., 3] > 10)
print(dst, 'bbox', xs.min(), ys.min(), xs.max(), ys.max())
