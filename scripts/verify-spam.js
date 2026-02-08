const http = require('http');

const sendRequest = (data) => {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify(data);
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: '/api/contact',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData),
            },
        };

        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                resolve({ status: res.statusCode, body: JSON.parse(body) });
            });
        });

        req.on('error', (e) => reject(e));
        req.write(postData);
        req.end();
    });
};

const runTests = async () => {
    console.log('Starting Spam Protection Verification...');

    // Test 1: Valid Request
    console.log('\nTest 1: Normal Request (Should succeed if not rate limited)');
    try {
        const res1 = await sendRequest({
            name: 'Test User',
            email: 'test@example.com',
            message: 'Hello world',
            phone: ''
        });
        console.log(`Status: ${res1.status}, Body:`, res1.body);
    } catch (e) {
        console.error('Test 1 Failed:', e.message);
    }

    // Test 2: Honeypot Request
    console.log('\nTest 2: Honeypot Request (Should return success but be filtered)');
    try {
        const res2 = await sendRequest({
            name: 'Bot User',
            email: 'bot@example.com',
            message: 'Spam message',
            phone: '1234567890' // Honeypot filled
        });
        console.log(`Status: ${res2.status}, Body:`, res2.body);
        if (res2.body.id === 'filtered') {
            console.log('PASS: Request was filtered.');
        } else {
            console.log('FAIL: Request was NOT filtered.');
        }
    } catch (e) {
        console.error('Test 2 Failed:', e.message);
    }

    // Test 3: Rate Limiting
    console.log('\nTest 3: Rate Limiting (Sending multiple requests)');
    for (let i = 0; i < 5; i++) {
        try {
            console.log(`Request ${i + 1}...`);
            const res = await sendRequest({
                name: `Spammer ${i}`,
                email: `spam${i}@example.com`,
                message: 'Spam spam spam',
                phone: ''
            });
            console.log(`Status: ${res.status}`);
            if (res.status === 429) {
                console.log('PASS: Rate limit hit!');
                break;
            }
        } catch (e) {
            console.error(`Request ${i + 1} Failed:`, e.message);
        }
        // Small delay to ensure we don't overwhelm node HTTP agent
        await new Promise(r => setTimeout(r, 100));
    }
};

runTests();
