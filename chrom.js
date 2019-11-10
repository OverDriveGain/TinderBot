const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://github.com');
  await page.screenshot({ path: 'screenshots/github.png' });
  
  browser.close();
}

run();


// Read the file and print its contents.


const BT = '#content > div > span > div > div.App__body.H\\28 100\\25 \\29.Pos\\28 r\\29.Z\\28 0\\29.Ov\\28 h\\29';// > div > main > div.H\\28 100\\25 \\29 > div > div ';
const pic = '#content > div > span > div > div.App__body.H\\28 100\\25 \\29.Pos\\28 r\\29.Z\\28 0\\29.Ov\\28 h\\29 > div > main > div.H\\28 100\\25 \\29 > div > div > div.recsCardboard.W\\28 100\\25 \\29.Mt\\28 a\\29.H\\28 100\\25 \\29 --s.Px\\28 10px\\29 --s > div';
const BUTTON_YES = '#content > div > span > div > div.App__body.H\\28 100\\25 \\29.Pos\\28 r\\29.Z\\28 0\\29.Ov\\28 h\\29 > div > main > div.H\\28 100\\25 \\29 > div > div > div.recsCardboard.W\\28 100\\25 \\29.Mt\\28 a\\29.H\\28 100\\25 \\29 --s.Px\\28 10px\\29 --s > div > div.CenterAlign.recsGamepad.Pos\\28 r\\29.Py\\28 16px\\29.Px\\28 16px\\29.Px\\28 8px\\29 --ml.D\\28 f\\29.Jc\\28 sa\\29.Ai\\28 c\\29.Maw\\28 375px\\29 --m.Mx\\28 a\\29 > button.button.Lts\\28 \\24 ls-s\\29.Z\\28 0\\29.Cur\\28 p\\29.Tt\\28 u\\29.Bdrs\\28 50\\25 \\29.P\\28 0\\29.Fw\\28 \\24 semibold\\29.recsGamepad__button.D\\28 b\\29.Bgc\\28 \\23 fff\\29.Wc\\28 \\24 transform\\29.recsGamepad__button--like.Scale\\28 1\\2e 1\\29 \\3a h'
const BUTTON_NO = '#content > div > span > div > div.App__body.H\\28 100\\25 \\29.Pos\\28 r\\29.Z\\28 0\\29.Ov\\28 h\\29 > div > main > div.H\\28 100\\25 \\29 > div > div > div.recsCardboard.W\\28 100\\25 \\29.Mt\\28 a\\29.H\\28 100\\25 \\29 --s.Px\\28 10px\\29 --s > div > div.CenterAlign.recsGamepad.Pos\\28 r\\29.Py\\28 16px\\29.Px\\28 16px\\29.Px\\28 8px\\29 --ml.D\\28 f\\29.Jc\\28 sa\\29.Ai\\28 c\\29.Maw\\28 375px\\29 --m.Mx\\28 a\\29 > button.button.Lts\\28 \\24 ls-s\\29.Z\\28 0\\29.Cur\\28 p\\29.Tt\\28 u\\29.Bdrs\\28 50\\25 \\29.P\\28 0\\29.Fw\\28 \\24 semibold\\29.recsGamepad__button.D\\28 b\\29.Bgc\\28 \\23 fff\\29.Wc\\28 \\24 transform\\29.recsGamepad__button--dislike.Scale\\28 1\\2e 1\\29 \\3a h';
var exec = require('child_process').exec, child;
const pptr = require('puppeteer');
child = exec('google-chrome --remote-debugging-port=9222 https://chromium.org 2> /home/manar/MyPrograms/Headles-Automation/output &',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
setTimeout(start_swiping, 4000);

function start_swiping() {
    filename = 'output'
    var ws='';
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(filename)
    });

    lineReader.on('line', function (line) {

        console.log('Line from file:', line);

        if (line[22] == 'w') {
            console.log('WS IS :', line.slice(59, -1));
            ws = line.slice(59, -1);
        }
    });
    pptr.connect({"browserWSEndpoint" : "ws:////[::1]:9222/devtools/browser/".concat(ws)}).then(async browser => {
//        const browser = await pptr.launch({headless: false});
        console.log("bla bla");
        const page = await browser.newPage();
        await page.goto('https://www.tinder.com/');
        await page.waitForNavigation();
        await page.waitFor(3000);
        await page.click(BUTTON_YES);
        for (var i = 0; i < 40; i++) {

        }
        //  var fs = require('fs')
        //  var fd = fs.openSync(filename, 'w');

    })();



}
//async function run() {
//  const browser = pptr.launchDetached({
//   standard Browser options
//);
//  const page = await pptr.newPage();
//  await page.goto('https://www.tinder.com');
//  await page.screenshot({ path: 'screenshots/github.png' });

//  browser.close();
//}
//run();
//> div.recsCardboard.W\28 100\25 \29.Mt\28 a\29.H\28 100\25 \29 --s.Px\28 10px\29 --s > div > div.CenterAlign.recsGamepad.Pos\28 r\29.Py\28 16px\29.Px\28 16px\29.Px\28 8px\29 --ml.D\28 f\29.Jc\28 sa\29.Ai\28 c\29.Maw\28 375px\29 --m.Mx\28 a\29 >
// button.button.Lts\28 \24 ls-s\29.Z\28 0\29.Cur\28 p\29.Tt\28 u\29.Bdrs\28 50\25 \29.P\28 0\29.Fw\28 \24 semibold\29.recsGamepad__button.D\28 b\29.Bgc\28 \23 fff\29.Wc\28 \24 transform\29.recsGamepad__button--like.Scale\28 1\2e 1\29 \3a h