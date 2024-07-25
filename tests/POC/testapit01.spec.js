import { test, expect } from '@playwright/test';

let empid;
test('API 1: POST To Employee List', async ({ request }) => {
    const token = '6ea55450f35601888189e1583193455535a96c8affceb4caf449dde415478d60'
    const resp = await request.fetch('https://gorest.co.in/public/v2/users', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: {
            "name": "Thienlele Toole",
            "email": "Cart677boy1977@fatman.com",
            "gender": "male",
            "status": "active"           
        }
    });
    const respBody = await resp.json();

    empid = respBody.id;


    console.log(resp.statusText());
    console.log(resp.status());
    console.log(await resp.text())
    expect(resp.status()).toBe(201);
});

test('API 2: Get Employee', async ({ request }) => {

    const token = '6ea55450f35601888189e1583193455535a96c8affceb4caf449dde415478d60'
    const resp = await request.fetch(`https://gorest.co.in/public/v2/users/${empid}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(resp.statusText());
    console.log(resp.status());
    console.log(await resp.text())
    expect(resp.status()).toBe(200);

});


test('API 3: PUT To Employee List', async ({ request }) => {
    const token = '6ea55450f35601888189e1583193455535a96c8affceb4caf449dde415478d60'
    const resp = await request.fetch(`https://gorest.co.in/public/v2/users/${empid}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data:{
            "name": "Thienle Tool",
            "email": "dick7boy1977@fatman.com",
            "gender": "male",
            "status": "active"   
        }
    });
    console.log(resp.statusText());
    console.log(resp.status());
    console.log(await resp.text())
    expect(resp.status()).toBe(200);
});