/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PageHead from '../../components/Head/page';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import LargeSidebar from '../../layouts/LargeSidebar';
import Sidebar from './Sidebar';
import Body from './Body';
import { headers } from '../../utils/helpers';
import { blogHeaderJPG, blogHeaderWebP } from '../../utils/next-gen-images';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      date: '',
      posts: [],
      show: false,
      triggerModal: true,
      covidPage: false,
      seo: {},
    };

    this.printScreen = this.printScreen.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.hideSubscription = this.hideSubscription.bind(this);
  }


  async componentDidMount() {
    const { location } = this.props;
    const page = location.pathname;
    const response = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/single-page/page${page}`);
    const json = await response.json();
    const { content, title, seo } = json;
    const covidUrl = 'covid-19-crisis-management-unit';
    const covidEdUrl = 'government-education-covid-19-response-team';

    this.setState({
      title, content, seo,
    });

    if (page.indexOf(covidUrl) > -1 || page.indexOf(covidEdUrl) > -1) {
      const covidResponse = await fetch(`${process.env.REACT_APP_FEED_API}/covid-19-news`, { headers });
      const posts = await covidResponse.json();

      this.setState({ covidPage: true }, () => {
        this.setState({ posts });
      });
    }

    if(page.indexOf(covidUrl) < 0) {
      const postResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/single/post/develop-in-a-jersey-city-inclusionary-zone`, { headers });
      const postJson = await postResponse.json();
      const { posts } = postJson;
      
      this.setState({ posts });
    }  
    
  }


  printScreen() {
    window.print();
    return false;
  }

  toggleModal() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  hideSubscription() {
    this.setState({ triggerModal: false }, () => {
      // remove custom modal
      const modal = document.getElementById('subscriptionModal');
      modal.classList.remove('show');
      modal.setAttribute('style', 'display:none');

      // remove custom modal background
      const modalBckGround = document.querySelector('.modal-backdrop');
      modalBckGround.setAttribute('style', 'display:none');
    });
  }

  render() {
    const {
      title,
      content,
      posts,
      show,
      seo,
      covidPage,
    } = this.state;

    const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
    const subTitle = (extractSubTitle !== null) ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
    const bodyContent = content.replace(subTitle, '');


    return (
      <div id="page">
        <PageHead seo={seo} />
        <SingleSubHeader
          title={title}
          subtitle={subTitle}
          imageWebp={blogHeaderWebP}            
          imageJPG={blogHeaderJPG}
          height="auto"
        />
        <LargeSidebar
          body={(<Body
            content={bodyContent}
            covidPage={covidPage}            
          />)}
          sidebar={(
            <Sidebar
              posts={posts}
              hideSubscription={this.hideSubscription}
              show={show}
              toggleModal={this.toggleModal}
              covidPage={covidPage}
            />
          )}
        />
      </div>
    );
  }
}

export default Page;
