/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import Image from 'next/image';
import ClipLoader from 'react-spinners/ClipLoader';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import marginStyles from 'styles/Margins.module.css';

export default function AttorneyProfilePractice({ initalArticles, title }) {
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(11);
  const [articleList, setArticleList] = useState(initalArticles || []);

  async function handleClick() {
    setLoading(true);
    setPageIndex(pageIndex => pageIndex += 11);
    setLoading(false);
  }
  return (
    <Row className={marginStyles.mtMinusMd2}>
      <Col sm={12}>
        <h4 className={grayTitleStyles.title}>{title} Articles</h4>
      </Col>
      {initalArticles.length <= 0 ? (
         <Col sm={12} className="my-3">
          <p className="text-center">
            <strong>This attorney does not have any published articles or blog posts.</strong>
          </p>
        </Col>
      ) : articleList.filter((_, i) => i <= pageIndex).map((article) => (
        <Col sm={12} md={4} key={article.title} className="my-3">
          
            <a href={article.link} className="text-center mx-auto d-block">
              <Image
                alt={article.title}
                src={
                    article.image || article.featuredImg || '/images/no-image-found-diamond.png'
                  }
                width={300}
                height={150}
                className="rounded"
              />
              <small className="text-dark d-block">
                <strong>{article.title}</strong>
              </small>
            </a>
        </Col>
      ))}
      {initalArticles.length > 0 && (
        <Col sm={12}>
        <Button
          variant="danger"
          className="px-4 mx-3 mb-3"
          onClick={() => handleClick()}
        >
          {loading ? <ClipLoader loading={loading} size={12} color="#FFF" /> : <>Load more posts</>}
        </Button>
      </Col>
      )}
    </Row>
  );
}
