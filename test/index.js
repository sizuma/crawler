const browser = require('../browser');
const path = require('path');

describe('Crawler', () => {

    it('should get title from local html file', (done) => {
        const title = browser('file:' + path.join(__dirname, '..', 'html', 'index.html'), () => {
            const {$} = window;
            return $('title').text();
        });
        title.then(title => {
            if (title === 'Title') done();
            else done(`${title} !== Title`);
        }).catch(done)
    })
});
