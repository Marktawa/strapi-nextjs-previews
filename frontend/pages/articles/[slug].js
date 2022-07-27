
import MarkdownView from 'react-showdown';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchArticlesApi, fetchArticleApi } from '/lib/articles';

const ArticleView = (props) => {
  const { article } = props;
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg="7" className="mx-lg-auto">
            <h1>{article.data[0].attributes.title}</h1>
            <MarkdownView markdown={article.data[0].attributes.content} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// 1
export async function getStaticPaths() {
  const articles = await fetchArticlesApi();
  const paths = articles.data.map((article) => ({ params: { slug: article.attributes.slug } }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // 2
  const slug = context.params.slug;
  if (!slug) {
    throw new Error('Slug not valid');
  }
  
  // 3
  const article = await fetchArticleApi(slug);
  if (!article) {
    return { notFound: true };
  }

  // 4
  return { props: { article } };
}

export default ArticleView;