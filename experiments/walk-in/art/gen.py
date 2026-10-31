# Usage: GEMINI_KEY=... python3 gen.py <out.png> <prompt-file> [ref images...]
# The key comes only from the environment; it is never written anywhere.
import base64, json, os, sys, urllib.request
out, prompt_file, *refs = sys.argv[1:]
parts = [{"text": open(prompt_file).read()}]
for r in refs:
    mime = 'image/png' if r.endswith('.png') else 'image/jpeg'
    parts.append({"inline_data": {"mime_type": mime, "data": base64.b64encode(open(r, 'rb').read()).decode()}})
body = {"contents": [{"parts": parts}],
        "generationConfig": {"responseModalities": ["IMAGE", "TEXT"], "imageConfig": {"aspectRatio": "16:9"}}}
model = os.environ.get('MODEL', 'gemini-3-pro-image')
req = urllib.request.Request(
    f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent",
    data=json.dumps(body).encode(), headers={"Content-Type": "application/json", "x-goog-api-key": os.environ['GEMINI_KEY']})
try:
    res = json.load(urllib.request.urlopen(req, timeout=300))
except urllib.error.HTTPError as e:
    print('HTTP', e.code, e.read()[:600].decode()); sys.exit(1)
for c in res.get('candidates', []):
    for p in c.get('content', {}).get('parts', []):
        d = p.get('inlineData') or p.get('inline_data')
        if d:
            open(out, 'wb').write(base64.b64decode(d['data'])); print('saved', out); sys.exit(0)
        if 'text' in p: print('text:', p['text'][:300])
print('no image', json.dumps(res)[:600]); sys.exit(1)
