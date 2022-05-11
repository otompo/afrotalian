import React, { Fragment } from 'react';
import TopTitle from '../components/home/TopTitle';
import { PhoneFilled, MailFilled } from '@ant-design/icons';
import ContactCard from '../components/home/ContactCard';
import Layout from '../components/layout/Layout';

const ContactUs = () => {
  return (
    <Layout title="Contact Us">
      <Fragment>
        <div className="container-fluid industries-bnr">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="text-center" style={{ marginTop: '150px' }}>
                <TopTitle
                  slogan={
                    "While we're good with our services, there are simpler ways for us to get in touch and answer your questions"
                  }
                  welc={'Contact'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-3 text-center">
              <ContactCard
                icon={<PhoneFilled style={{ fontSize: '110px' }} />}
                title={
                  <h5>
                    <a href="tel:+4591431537" style={{ color: '#000' }}>
                      {' '}
                      +45 91 43 15 37
                    </a>
                  </h5>
                }
                body={
                  'We perfectly program your website across NextJS with Node express server, WordPress, HTML and Joomla to ensure it characteristic tells a story.'
                }
              />
            </div>
            <div className="col-md-4 my-3 text-center">
              <ContactCard
                icon={
                  <svg
                    xmlns="https://icons8.com/icon/7880/icon"
                    width="114"
                    height="114"
                    viewBox="0 0 24 24"
                    style={{ margin: '0 auto', paddingTop: '5px' }}
                  >
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                  </svg>
                }
                title={'Second floor Queen of Peace Building '}
                body={
                  'We perfectly program your website across NextJS with Node express server, WordPress, HTML and Joomla to ensure it characteristic tells a story.'
                }
              />
            </div>
            <div className="col-md-4 my-3 text-center">
              <ContactCard
                icon={<MailFilled style={{ fontSize: '110px' }} />}
                title={
                  <a
                    href="mailto:info@codesmartwebsoft.com"
                    style={{ color: '#000' }}
                  >
                    info@codesmartwebsoft.com
                  </a>
                }
                body={
                  'We perfectly program your website across NextJS with Node express server, WordPress, HTML and Joomla to ensure it characteristic tells a story.'
                }
              />
            </div>
          </div>
        </div>
      </Fragment>
    </Layout>
  );
};

export default ContactUs;
