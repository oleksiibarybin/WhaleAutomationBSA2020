const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

process.on('unhandledRejection', r => {
    console.warn(`Encountered unhandled promise rejection. Reason: ${r}`);
});

const {
    USERDATA, // C:\Users\<User>\AppData\Local\Google\Chrome\User Data
    HEADLESS
} = process.env;

const headlessArgs = HEADLESS ? [
    '--start-maximized',
] : [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-gpu',
    '--disable-background-timer-throttling',
    '--disable-backgrounding-occluded-windows',
    '--disable-renderer-backgrounding',
    '--start-maximized',
    '--unlimited-storage'
];

const args = [
    '--ignore-certificate-errors', 
    '--no-sandbox',
    `--user-data-dir=${USERDATA}`,
    '--profile-directory=Default',
    '--start-maximized'
]

const path = require('path');
const SPECS_DIR = path.join(__dirname, 'specs');
const LIB_DIR = path.join(__dirname, 'lib');
const HELPERS_DIR = path.join(LIB_DIR, 'helpers');
const OUTPUT_DIR = path.join(__dirname, 'output');
const testPattern = path.relative(__dirname, path.join(SPECS_DIR, '**', '*_test.js'));
const timeout = 10000;

const baseUrl = 'http://bsa2020-whale.westeurope.cloudapp.azure.com';
console.log(`Using ${baseUrl} as app url`);

const defaultConf = {
    helpers: {
        Puppeteer: {
            url: baseUrl,
            show: true,
            waitForAction: 400,
            waitForTimeout: 90000,
            waitForNavigation: 'networkidle0',
            windowSize: '1920x1080',
            pressKeyDelay: 40,
            fullPageScreenshots: true,
            chrome: {
                defaultViewport: {
                    width: 1920,
                    height: 1080
                },
                args: args
            }
        },
        PageHelper: {
            require: path.join(HELPERS_DIR, 'page_helper.js')
        },
    },
    tests: testPattern,
    timeout: timeout,
    output: OUTPUT_DIR,
    mocha: {
        reporterOptions: {
            'codeceptjs-cli-reporter': {
                stdout: '-',
                options: {
                    verbose: false,
                    steps: false,
                    debug: true
                }
            },
            'mocha-junit-reporter': {
                stdout: '-',
                options: {
                    mochaFile: path.join(OUTPUT_DIR, 'test_result.xml')
                }
            },
            mochawesome: {
                stdout: '-',
                options: {
                    reportDir: path.join(OUTPUT_DIR, 'htmlReport'),
                    reportFilename: 'report',
                    reportTitle: 'End-to-End Testing',
                    inlineAssets: true
                }
            }
        }
    },
    bootstrap: null,
    teardown: null,
    hooks: [],
    require: [],
    name: 'e2e_tests',
};

exports.config = defaultConf;