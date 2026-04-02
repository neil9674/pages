from pathlib import Path
p = Path('/Users/neilchandra/nighthawk/neil_2027/_notebooks/2026-03-27-java-arrays-fortress.ipynb')
text = p.read_text()
start = text.find('<VSCode.Cell id="#VSC-85955869" language="python">')
if start == -1:
    raise SystemExit('start not found')
end = text.find('</VSCode.Cell>', start)
if end == -1:
    raise SystemExit('end not found')
end += len('</VSCode.Cell>')
newcell = '''<VSCode.Cell language="markdown">
<div id="gameContainer" style="position:relative; width:100%; height:80vh; background:#000;">\n  <canvas id="gameCanvas" style="width:100%; height:100%; display:block;"></canvas>\n</div>\n\n<script type="module">\n  import Game from "{{site.baseurl}}/assets/js/adventureGame/Game.js";\n  import GameLevelArrayFortress from "{{site.baseurl}}/assets/js/adventureGame/GameLevelArrayFortress.js";\n  import { pythonURI, javaURI, fetchOptions } from "{{site.baseurl}}/assets/js/api/config.js";\n\n  const environment = {\n    path: "{{site.baseurl}}",\n    pythonURI,\n    javaURI,\n    fetchOptions,\n    gameContainer: document.getElementById("gameContainer"),\n    gameCanvas: document.getElementById("gameCanvas"),\n    gameLevelClasses: [GameLevelArrayFortress]\n  };\n\n  Game.main(environment);\n</script>\n</VSCode.Cell>'''
text = text[:start] + newcell + text[end:]
p.write_text(text)
print('replaced cell and wrote notebook')
