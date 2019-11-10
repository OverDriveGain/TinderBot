// Read the file and print its contents.

function genRandom(min, max)
{
    return Math.random() * (max-min) + min ;
}
const tmp = '#content > div > span > div > div.App__body.H\\28 100\\25 \\29.Pos\\28 r\\29.Z\\28 0\\29.Ov\\28 h\\29 > div > main > div.H\\28 100\\25 \\29 > div > div > div.profileCard.Pos\\28 r\\29.D\\28 f\\29.Ai\\28 c\\29.Fld\\28 c\\29.Expand--s.Mt\\28 a\\29 > div.Pos\\28 f\\29.W\\28 100\\25 \\29.B\\28 0\\29.Z\\28 1\\29.Pos\\28 a\\29 --ml.Bdrsbend\\28 8px\\29 --ml.Bdrsbstart\\28 8px\\29 --ml.Bg\\28 \\24 transparent-white-gradient\\29 > div > button.button.Lts\\28 \\24 ls-s\\29.Z\\28 0\\29.Cur\\28 p\\29.Tt\\28 u\\29.Bdrs\\28 50\\25 \\29.P\\28 0\\29.Fw\\28 \\24 semibold\\29.recsGamepad__button.D\\28 b\\29.Bgc\\28 \\23 fff\\29.Wc\\28 \\24 transform\\29.recsGamepad__button--dislike.Scale\\28 1\\2e 1\\29 \\3a h > span > svg';
const tmp_yes = '#content > div > span > div > div.App__body.H\\28 100\\25 \\29.Pos\\28 r\\29.Z\\28 0\\29.Ov\\28 h\\29 > div > main > div.H\\28 100\\25 \\29 > div > div > div.profileCard.Pos\\28 r\\29.D\\28 f\\29.Ai\\28 c\\29.Fld\\28 c\\29.Expand--s.Mt\\28 a\\29 > div.Pos\\28 f\\29.W\\28 100\\25 \\29.B\\28 0\\29.Z\\28 1\\29.Pos\\28 a\\29 --ml.Bdrsbend\\28 8px\\29 --ml.Bdrsbstart\\28 8px\\29 --ml.Bg\\28 \\24 transparent-white-gradient\\29 > div > button.button.Lts\\28 \\24 ls-s\\29.Z\\28 0\\29.Cur\\28 p\\29.Tt\\28 u\\29.Bdrs\\28 50\\25 \\29.P\\28 0\\29.Fw\\28 \\24 semibold\\29.recsGamepad__button.D\\28 b\\29.Bgc\\28 \\23 fff\\29.Wc\\28 \\24 transform\\29.recsGamepad__button--like.Scale\\28 1\\2e 1\\29 \\3a h > span > svg';
const BT = '#content > div > span > div > div.App__body.H\\28 100\\25 \\29.Pos\\28 r\\29.Z\\28 0\\29.Ov\\28 h\\29';// > div > main > div.H\\28 100\\25 \\29 > div > div ';
const PIC = '#content > div > span > div > div.App__body.H\\28 100\\25 \\29.Pos\\28 r\\29.Z\\28 0\\29.Ov\\28 h\\29 > div > main > div.H\\28 100\\25 \\29 > div > div > div.recsCardboard.W\\28 100\\25 \\29.Mt\\28 a\\29.H\\28 100\\25 \\29 --s.Px\\28 10px\\29 --s > div > div.recsCardboard__cards.Expand.Animdur\\28 \\24 fast\\29.Animtf\\28 eio\\29.Pos\\28 r\\29.CenterAlign.Z\\28 1\\29 > div.recCard.Ov\\28 h\\29.Cur\\28 p\\29.W\\28 100\\25 \\29.Bgc\\28 \\24 c-placeholder\\29.StretchedBox.Bdrs\\28 8px\\29.CenterAlign--ml.Toa\\28 n\\29.active > span > div';
const NEXT_PIC = '#content > div > span > div > div.App__body.H\\28 100\\25 \\29.Pos\\28 r\\29.Z\\28 0\\29.Ov\\28 h\\29 > div > main > div.H\\28 100\\25 \\29 > div > div > div.profileCard.Pos\\28 r\\29.D\\28 f\\29.Ai\\28 c\\29.Fld\\28 c\\29.Expand--s.Mt\\28 a\\29 > div.Pos\\28 r\\29 --ml.Z\\28 1\\29.Bgc\\28 \\23 fff\\29.Ov\\28 h\\29.Expand.Bdrs\\28 8px\\29 --ml.Bxsh\\28 \\24 bxsh-card\\29 --ml > div > div.Pos\\28 r\\29.Cnt\\28 \\24 blank\\29 \\3a \\3a a.D\\28 b\\29 \\3a \\3a a.Pb\\28 125\\25 \\29 \\3a \\3a a > a.profileCard__slider__backLink > div > div.D\\28 f\\29.Jc\\28 sa\\29.Mb\\28 4px\\29 --ml.W\\28 100\\25 \\29.Pos\\28 a\\29.B\\28 0\\29 > button:nth-child(3)';
const BUTTON_YES = '#content > div > span > div > div.App__body.H\\28 100\\25 \\29.Pos\\28 r\\29.Z\\28 0\\29.Ov\\28 h\\29 > div > main > div.H\\28 100\\25 \\29 > div > div > div.recsCardboard.W\\28 100\\25 \\29.Mt\\28 a\\29.H\\28 100\\25 \\29 --s.Px\\28 10px\\29 --s > div > div.CenterAlign.recsGamepad.Pos\\28 r\\29.Py\\28 16px\\29.Px\\28 16px\\29.Px\\28 8px\\29 --ml.D\\28 f\\29.Jc\\28 sa\\29.Ai\\28 c\\29.Maw\\28 375px\\29 --m.Mx\\28 a\\29 > button.button.Lts\\28 \\24 ls-s\\29.Z\\28 0\\29.Cur\\28 p\\29.Tt\\28 u\\29.Bdrs\\28 50\\25 \\29.P\\28 0\\29.Fw\\28 \\24 semibold\\29.recsGamepad__button.D\\28 b\\29.Bgc\\28 \\23 fff\\29.Wc\\28 \\24 transform\\29.recsGamepad__button--like.Scale\\28 1\\2e 1\\29 \\3a h'
const BUTTON_NO = '#content > div > span > div > div.App__body.H\\28 100\\25 \\29.Pos\\28 r\\29.Z\\28 0\\29.Ov\\28 h\\29 > div > main > div.H\\28 100\\25 \\29 > div > div > div.recsCardboard.W\\28 100\\25 \\29.Mt\\28 a\\29.H\\28 100\\25 \\29 --s.Px\\28 10px\\29 --s > div > div.CenterAlign.recsGamepad.Pos\\28 r\\29.Py\\28 16px\\29.Px\\28 16px\\29.Px\\28 8px\\29 --ml.D\\28 f\\29.Jc\\28 sa\\29.Ai\\28 c\\29.Maw\\28 375px\\29 --m.Mx\\28 a\\29 > button.button.Lts\\28 \\24 ls-s\\29.Z\\28 0\\29.Cur\\28 p\\29.Tt\\28 u\\29.Bdrs\\28 50\\25 \\29.P\\28 0\\29.Fw\\28 \\24 semibold\\29.recsGamepad__button.D\\28 b\\29.Bgc\\28 \\23 fff\\29.Wc\\28 \\24 transform\\29.recsGamepad__button--dislike.Scale\\28 1\\2e 1\\29 \\3a h';
const SUPER_YES = '#content > div > span > div > div.App__body.H\\28 100\\25 \\29.Pos\\28 r\\29.Z\\28 0\\29.Ov\\28 h\\29 > div > main > div.H\\28 100\\25 \\29 > div > div > div.profileCard.Pos\\28 r\\29.D\\28 f\\29.Ai\\28 c\\29.Fld\\28 c\\29.Expand--s.Mt\\28 a\\29 > div.Pos\\28 f\\29.W\\28 100\\25 \\29.B\\28 0\\29.Z\\28 1\\29.Pos\\28 a\\29 --ml.Bdrsbend\\28 8px\\29 --ml.Bdrsbstart\\28 8px\\29 --ml.Bg\\28 \\24 transparent-white-gradient\\29 > div > button.button.Lts\\28 \\24 ls-s\\29.Z\\28 0\\29.Cur\\28 p\\29.Tt\\28 u\\29.Bdrs\\28 50\\25 \\29.P\\28 0\\29.Fw\\28 \\24 semibold\\29.recsGamepad__button.D\\28 b\\29.Bgc\\28 \\23 fff\\29.Wc\\28 \\24 transform\\29.recsGamepad__button--like.Scale\\28 1\\2e 1\\29 \\3a h';
var exec = require('child_process').exec, child;
const pptr = require('puppeteer');
child = exec('google-chrome --remote-debugging-port=9222 https://chromium.org 2> ./output &',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
setTimeout(start_swiping, 5000);
setTimeout(read_ws_end_point, 3000);
var ws='';
function read_ws_end_point()
{
    filename = 'output'
    var fs = require('fs');
    var readableStream = fs.createReadStream(filename);
    var data = '';
    var chunk;
    readableStream.on('readable', function() {
        flag = 1;
        while ((chunk=readableStream.read()) != null && flag == 1 ) {
            data += chunk;
            console.log(data)
            flag =0;
            data.split("\n");
            for (var i = 0 ; i < data.length ; i++)
            {
                if (data[i] == 'w' && data[i+1] == 's' ) {
                    y=i
                    while(data[y]!='\n')
                    {
                        y++;
                    }
                    ws = data.slice(i, y+1);
                    i=9999;
                }
            }
        }
    });

}
function start_swiping() {
    ws_no = ws.slice(37,-1)
    console.log('WS IS :', ws_no);
    var endPoint = "ws://127.0.0.1:9222/devtools/browser/".concat(ws_no);
    console.log('connecting to end point: ', endPoint)
    pptr.connect({"browserWSEndpoint" : endPoint}).then(async browser => {
//        const browser = await pptr.launch({headless: false});
        console.log("bla bla");
        const page = await browser.newPage();
        await page.goto('https://www.tinder.com/');
        await page.waitForNavigation();
        await page.waitFor(genRandom(2000, 3000));

        await page.screenshot({path: './buddy-screenshot.png'});

        var human = 0;
        var human_scroll=1;
        var choice = 0;
        var choice_btn;
        const timeMin = 3000;
        const timeMax = 6000;
        const maxChance = 100;
        const minChance = 1;
        for (var i = 0; i < 80; i) {
            time = genRandom(timeMin, timeMax);
            if(0){ // i < 30
            choice = genRandom(60,100);
            }
            else{
            choice = genRandom(minChance,maxChance);
            }
            choice_btn = BUTTON_NO;
            if(choice > 80) {
                choice_btn = BUTTON_YES;
                console.log("We are liking number: ",i);
                i++;

            }
            human = genRandom(0,2);
	    console.log("Human is", human);
            if(human>1) {
                console.log("Clicking on Photo\n")
                try {
                    await page.click(PIC);
                    await page.waitFor(genRandom(900, 1500));
                    human_scroll = genRandom(1, 4);
                    try{
                    while (human_scroll > 0) {

                        console.log("sliding next photo\n")
                        await page.click(NEXT_PIC);
                        await page.waitFor(genRandom(900, 1500));


                        human_scroll--;
                    }
                    if (choice > 33) {
                        console.log("Clicking yes after Photo\n")
                        await page.click(tmp_yes);
                        await page.waitFor(genRandom(900, 1500));

                    }
                    else {
                        console.log("Clicking no after  Photo\n")
                        await page.click(tmp);
                        await page.waitFor(genRandom(900, 1500));
                    }}
                    catch(e)
                    {
                        console.log(e);
                       try{
                        await page.waitFor(genRandom(900, 1500));   //No next photo
                        await page.click(choice_btn);
                        console.log(e)}
                        catch (e) {
                            console.log("No line button");
                            await page.waitFor(genRandom(900, 1500));   //No next photo
                            await page.click(SUPER_YES);

                        }
                    }
                }
                catch (e) {

                    await page.waitFor(genRandom(900, 1500));   //No photo or super liked
                    await page.click(choice_btn);
                    console.log(e)
                }
            }
            else{
                if(choice>50){
                console.log("Clicking on yes\n")

                }
                else
                {
                    console.log("Clicking on no\n")
                }
                await page.waitFor(genRandom(900, 1500));

                await page.click(choice_btn);
//               console.log(choice);
            }
            //  var fs = require('fs')
        //  var fd = fs.openSync(filename, 'w');

            //Check photos
        }
        console.log("FINISHED we liked ",i);
    }).catch(console.error);;



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
