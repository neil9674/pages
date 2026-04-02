from pathlib import Path
p = Path('/Users/neilchandra/nighthawk/neil_2027/_posts/2026-03-27-java-arrays-fortress_IPYNB_2_.md')
t = p.read_text()
s = t.index('```python')
e = t.index('## Learning Objectives', s)
new = '''<div id="gameContainer" style="position:relative; width:100%; height:80vh; background:#000;">\n  <canvas id="gameCanvas" style="width:100%; height:100%; display:block;"></canvas>\n</div>\n\n<script type="module">\n  import Game from "{{site.baseurl}}/assets/js/adventureGame/Game.js";\n  import GameLevelArrayFortress from "{{site.baseurl}}/assets/js/adventureGame/GameLevelArrayFortress.js";\n  import { pythonURI, javaURI, fetchOptions } from "{{site.baseurl}}/assets/js/api/config.js";\n\n  const environment = {\n    path: "{{site.baseurl}}",\n    pythonURI,\n    javaURI,\n    fetchOptions,\n    gameContainer: document.getElementById("gameContainer"),\n    gameCanvas: document.getElementById("gameCanvas"),\n    gameLevelClasses: [GameLevelArrayFortress]\n  };\n\n  Game.main(environment);\n</script>\n\n'''
p.write_text(t[:s] + new + t[e:])
print('done')
