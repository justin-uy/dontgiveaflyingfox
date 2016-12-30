const React = require('react');
const HeaderLeft = require('../HeaderLeft.react');
const HeaderRight = require('../HeaderRight.react');
const ImageGallery = require('../ImageGallery.react');
const DarkContainer = require('../DarkContainer.react');
const Container = require('../Container.react');

module.exports = class HomePage  extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Container>
            <HeaderLeft heading="dont give a flying fox / jane" subheading="creating since 2016" />
            <HeaderRight
              links={[{
                label: 'gallery',
                href: '#gallery'
              }, {
                label: 'about',
                href: '#about'
              }, {
                label: 'contact',
                href: '#contact'
              }]}
            />
          </Container>
        </header>
        <div id="gallery">
          <Container>
            <ImageGallery count={15} />
          </Container>
        </div>
        <div id="about">
          <DarkContainer>
            <p>Some really intersting information about not giving a flying fox</p>
          </DarkContainer>
        </div>
        <div id="contact">
          <Container>
            <p>Here is some contact info.</p>
          </Container>
        </div>
      </div>
    );
  }
};
