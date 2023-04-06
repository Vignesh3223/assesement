interface color {
    red?: string | number,
    pink?: string | number,
    purple?: string | number,
    deeppurple?: string | number,
    indigo?: string | number,
    blue?: string | number,
    lightblue?: string | number,
    cyan?: string | number,
    teal?: string | number,
    green?: string | number,
    lightgreen?: string | number,
    lime?: string | number,
    yellow?: string | number,
    amber?: string | number,
    orange?: string | number,
    deeporange?: string | number,
    brown?: string | number,
    grey?: string | number,
    black?: string | number,
    white?: string | number
}
function getcolors(): Promise<color[]> {
    return fetch('color.json')
        .then(res => res.json())
        .then(res => {
            return res as unknown as color[]
        })
}
getcolors()
    .then(color => {
        document.write("<h1><center>Colors</center></h1>");
        document.write(color.map(c => "Red :" + c.red + "<br>" + "Pink :" + c.pink + "<br>" + "Purple :" + c.purple + "<br>" + "Deeppurple :" + c.deeppurple + "<br>"
            + "Indigo :" + c.indigo + "<br>" + "Blue :" + c.blue + "<br>" + "Lightblue :" + c.lightblue + "<br>" + "Cyan :" + c.cyan + "<br>" + "Teal :" + c.teal + "<br>"
            + "Green :" + c.green + "<br>" + "Lightgreen :" + c.lightgreen + "<br>" + "Lime :" + c.lime + "<br>" + "Yellow :" + c.yellow + "<br>" + "Amber :" + c.amber + "<br>"
            + "Orange :" + c.orange + "<br>" + "Deeporange :" + c.deeporange + "<br>" + "Brown :" + c.brown + "<br>" + "Grey :" + c.grey + "<br>" + "Black :" + c.black + "<br>"
            + "White :" + c.white + "<br>").toString());
    })

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => console.log(json))
