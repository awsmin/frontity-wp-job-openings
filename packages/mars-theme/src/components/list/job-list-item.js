import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

/**
 * JobItem Component
 */
const JobItem = ({ item }) => {
  return (
    <ItemWrapper>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      {item._job_specs && (
        <div dangerouslySetInnerHTML={{ __html: item._job_specs }} />
      )}
      <LinkContainer>
        <Link link={item.link}>More Details</Link>
      </LinkContainer>
    </ItemWrapper>
  );
};

// Connect the JobItem to gain access to `state` as a prop
export default connect(JobItem);

const ItemWrapper = styled.div`
  border: 1px solid #ececec;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 25px 30px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const LinkContainer = styled.div`
  margin-top: 10px;

  & a {
    color: #1f38c5;
  }
`;
