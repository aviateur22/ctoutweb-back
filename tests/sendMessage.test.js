const request = require('supertest');
require('dotenv').config();

/**cookie et token pour les test */
const token = 'eyJjb250ZW50IjoiTmlHcDBTdFVoY0ZjS0oyVFJrVms5ZnhXbVBNcldFbFNmWkpzcnNjSUpPb05hbytGOFBPY3VGb1ppQnEwTW4yMyJ9';
const cookie = 'token_data=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRva2VuIjoiZXlKamIyNTBaVzUwSWpvaVQzQklWVFJSZDNWaFRXMXZaMFpTTW1aRVQySXhOMnhLSzJKTlJUVnJPVVJxVlVsRlJYZDRTbXRxV1hJNGFWQllObGd4YTNGbWNERk9Xa2RzU2pSR2NtYzRia1F5VTFkRVMwaHlRV2xPU0VoSlVXTmtWamh2ZERKc1VVTk1SR1JMUVdOc2FGRkZTRVJIY2xScU1WUk1hMFI0TVhGeFlYbHZkSEJqVlhVMmRYcEZTbTEyVTFsdFR6QmpkRWRXTWpad2EwRjZhRkZyYzJwcE16SkZaM1ZNVDJjcksycEdRVXRJTVhnNFRTczRkR2gxZFVoNWFVRnpSVlJyVUhFd1JUWkxJbjA9In0sImlhdCI6MTY1NDg5NTE0NSwiZXhwIjoxNjU0OTEzMTQ1LCJpc3MiOiJjdG91dHdlYiIsInN1YiI6ImNzdXJmX3Rva2VuIiwianRpIjoiOGRkMGM2YzMtMDliMC00OTFhLTkwOWItNDg4NmU2YmZlYTFmIn0.mQ-XEqDQmZlYsHxPlic_mmmC169dzeCPtzy22K2L3x0';

const app = require('../app');
describe('envoie d\'un message', () => {
    it('succes d\'envoie', async() => {
        const res = await request(app)
            .post('/api/messaging/')
            .send({
                reason: 'je souhaite faire un nouveau devis',
                email: 'bofgos@hot.fr',
                name:"bob l'éponge le 1er du nom",
                phone: '06 23 27 41 01',
                message: '<script>console.log("test")<script>',
                token: token
            })
            .set('Cookie',[cookie]);
            
        expect(res.body).toHaveProperty('message');
        expect(res.statusCode).toEqual(200);        
    });    
});

describe('envoie d\'un message', () => {
    it('succes d\'envoie', async() => {
        const res = await request(app)
            .post('/api/messaging/')
            .send({
                reason: 'je souhaite faire un nouveau devis',
                email: 'bofgos@hot.fr',
                name:"bob l'éponge le 1er du nom",
                phone: '0623274101',
                message: 'bonjour, je souhaite avoir un rendez vous avec vous. Comment allez vous',
                token: token
            })
            .set('Cookie',[cookie]);
            
        expect(res.body).toHaveProperty('message');
        expect(res.statusCode).toEqual(200);        
    });    
});

describe('envoie d\'un message', ()=>{
    it('echec d\'envoie - erreur du message', async()=>{
        const res = await request(app)
            .post('/api/messaging/')
            .send({
                reason: 'je souhaite faire un nouveau devis',
                email: 'bofgoshot.fr',
                name:"bob l'éponge le 1er du nom",
                phone: '06 23 27 41 01',
                token: token,
                message: 'ldfdfdfldflds @ %kjdjlsdldqdskfhdf hdfdkf4546413466464646'
            })
            .set('Cookie',[cookie]);
        
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.statusCode).toEqual(400);
    });
});

describe('envoie d\'un message', ()=>{
    it('echec d\'envoie - message absent', async()=>{
        const res = await request(app)
            .post('/api/messaging/')
            .send({
                reason: 'je souhaite faire un nouveau devis',
                email: 'bofgoshot.fr',
                name:"bob l'éponge le 1er du nom",
                phone: '06 23 27 41 01',
                token: token,
                message: 'ldfdfdfldflds @ %kjdjlsdldqdskfhdf hdfdkf4546413466464646'
            })
            .set('Cookie',[cookie]);
        
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.statusCode).toEqual(400);
    });
});

describe('envoie d\'un message', ()=>{
    it('echec d\'envoie - token ou jwt faux', async()=>{
        const res = await request(app)
            .post('/api/messaging/')
            .send({
                reason: 'je souhaite faire un nouveau devis',
                email: 'bofgoshot.fr',
                name:"bob l'éponge le 1er du nom",
                phone: '06 23 27 41 01',
                message: 'ldfdfdfldflds @ %kjdjlsdldqdskfhdf hdfdkf4546413466464646',
                token: 'eyJjb250ZW50IjoieDA2STh1VTJSZk1pZzhFaS9LT1IrSmRDS3FQYkZpUm4xK2hQRnEvRDNhbmRiN2xVZ3VNaHpJT3o0dTM5NXhDbSH9'
            })
            .set('Cookie',[cookie]);
        
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.statusCode).toEqual(403);
    });
});

describe('envoie d\'un message', ()=>{
    it('echec d\'envoie - token absent de la requete', async()=>{
        const res = await request(app)
            .post('/api/messaging/')
            .send({
                reason: 'je souhaite faire un nouveau devis',
                email: 'bofgoshot.fr',
                name:"bob l'éponge le 1er du nom",
                phone: '06 23 27 41 01',
                message: 'ldfdfdfldflds @ %kjdjlsdldqdskfhdf hdfdkf4546413466464646',
                token: ''
            })
            .set('Cookie',[cookie]);
        
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.statusCode).toEqual(403);
    });
});

describe('envoie d\'un message', ()=>{
    it('echec d\'envoie - erreur email', async()=>{
        const res = await request(app)
            .post('/api/messaging/')
            .send({
                reason: 'je souhaite faire un nouveau devis',
                email: 'bofgoshot.fr',
                name:"bob l'éponge le 1er du nom",
                phone: '06 23 27 41 01',
                message: 'ldfdfdfldflds @ %kjdjlsdldqdskfhdf hdfdkf4546413466464646',
                token: token
            })
            .set('Cookie',[cookie]);
        
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.statusCode).toEqual(400);
    });
});

describe('envoie d\'un message', ()=>{
    it('echec d\'envoie - erreur email', async()=>{
        const res = await request(app)
            .post('/api/messaging/')
            .send({
                reason: 'je souhaite faire un nouveau devis',
                email: 'bofgoshot.fr',
                name:"bob l'éponge le 1er du nom",
                phone: '0623274101',
                message: 'ldfdfdfldflds @ %kjdjlsdldqdskfhdf hdfdkf4546413466464646',
                token: token
            })
            .set('Cookie',[cookie]);
        
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.statusCode).toEqual(400);
    });
});

describe('envoie d\'un message', ()=>{
    it('echec d\'envoie-email absent', async()=>{
        const res = await request(app)
            .post('/api/messaging/')
            .send({
                reason: 'je souhaite faire un nouveau devis',
                email: '',
                name:"bob l'éponge le 1er du nom",
                phone: '06 23 27 41 01',
                message: 'ldfdfdfldflds @ %kjdjlsdldqdskfhdf hdfdkf4546413466464646',
                token: token
            })
            .set('Cookie',[cookie]);
        
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.statusCode).toEqual(400);
    });
});

describe('envoie d\'un message', ()=>{
    it('echec d\'envoie-raison faut', async()=>{
        const res = await request(app)
            .post('/api/messaging/')
            .send({
                reason: 'je souhaite faire un nouveau devis@*$',
                email: 'bofgos@hot.fr',
                name:"bob l'éponge le 1er du nom",
                phone: '06 23 27 41 01',
                message: 'ldfdfdfldflds @ %kjdjlsdldqdskfhdf hdfdkf4546413466464646',
                token: token
            })
            .set('Cookie',[cookie]);
        
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.statusCode).toEqual(400);
    });
});

describe('envoie d\'un message', ()=>{
    it('echec d\'envoie-raison absent', async()=>{
        const res = await request(app)
            .post('/api/messaging/')
            .send({
                reason: '',
                email: 'bofgos@hot.fr',
                name:"bob l'éponge le 1er du nom",
                phone: '06 23 27 41 01',
                message: 'ldfdfdfldflds @ %kjdjlsdldqdskfhdf hdfdkf4546413466464646',
                token: token
            })
            .set('Cookie',[cookie]);
        
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.statusCode).toEqual(400);
    });
});

describe('envoie d\'un message', ()=>{
    it('echec d\'envoie-phone faux', async()=>{
        const res = await request(app)
            .post('/api/messaging/')
            .send({
                reason: 'je souhaite faire un nouveau devis',
                email: 'bofgos@hot.fr',
                name:"bob l'éponge le 1er du nom",
                phone: '062327101',
                message: 'ldfdfdfldflds @ %kjdjlsdldqdskfhdf hdfdkf4546413466464646',
                token: token
            })
            .set('Cookie',[cookie]);
        
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.statusCode).toEqual(400);
    });
});

describe('envoie d\'un message', ()=>{
    it('echec d\'envoie-phone absent', async()=>{
        const res = await request(app)
            .post('/api/messaging/')
            .send({
                reason: 'je souhaite faire un nouveau devis',
                email: 'bofgos@hot.fr',
                name:"bob l'éponge le 1er du nom",
                phone: '',
                message: 'ldfdfdfldflds @ %kjdjlsdldqdskfhdf hdfdkf4546413466464646',
                token: token
            })
            .set('Cookie',[cookie]);
        
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.statusCode).toEqual(400);
    });
});