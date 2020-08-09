import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Spacer from '../../components/Grid/Spacer';
import Column from '../../components/Grid/Column';
import Row from '../../components/Grid/Row';
import TransparentContainer from '../../components/Containers/TransparentContainer';
import BigTitle from '../../components/BigTitle';
import Author from '../../components/blog/Author';
import FormatedDate from '../../components/blog/FormatedDate';
import Paragraph from '../../components/Paragraph';
import BigGhostButton from '../../components/BigGhostButton';

import './videoStyle.css';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;


export default function (props) {
  return (
    <React.Fragment>
      <TransparentContainer>
        <BigTitle>{props.post.frontmatter.title}</BigTitle>
        <Container>
          <Author author={props.post.frontmatter.author} />
          <FormatedDate>{props.post.frontmatter.date}</FormatedDate>
        </Container>
        <hr />
        <Paragraph dangerouslySetInnerHTML={{ __html: props.post.html }} />
        <hr />
        <nav>
          <Container>
            {props.previous && props.previous.frontmatter.hidden !== true && (
              <Link to={'/blog/post' + props.previous.fields.slug} rel="prev">
                <BigGhostButton>
                  ← {props.previous.frontmatter.title}
                </BigGhostButton>
              </Link>
            )}
            {props.next && props.next.frontmatter.hidden !== true && (
              <Link to={'/blog/post' + props.next.fields.slug} rel="next">
                <BigGhostButton>
                  {props.next.frontmatter.title} →
                </BigGhostButton>
              </Link>
            )}
          </Container>
        </nav>
      </TransparentContainer>
    </React.Fragment>
  );
}
