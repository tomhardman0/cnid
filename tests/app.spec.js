const app = require('../server/app');
const supertest = require('supertest');
const request = supertest.agent(app.listen());

describe('Routes - ', () => {
    it('/ should return a html page and code 200', (done) => {
        request.get('/')
            .expect('Content-Type', /html/)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                expect(res.text).toMatch('Articles');
                done();
            });
    });

    it('should return 200 and an article page for an existing article', (done) => {
        const knownSlug = 'Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry';
        const expectedTitleMatch = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry';
        request.get(`/${knownSlug}`)
            .expect('Content-Type', /html/)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                expect(res.text).toMatch(expectedTitleMatch);
                done();
            });
    });

    it('should return 200 and the no articles page for an unmatched article', (done) => {
        const noArticlesMatch = 'No article could be found with this name';
        request.get('/some-utter-trash')
            .expect('Content-Type', /html/)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                expect(res.text).toMatch(noArticlesMatch);
                done();
            });
    });
})
