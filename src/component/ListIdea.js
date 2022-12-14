import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';
export default function ListIdea({ ideas }) {
  let count = 0;
  return (
    <div style={{ overflow: 'auto', maxHeight: '350px' }}>
      <ListGroup>
        {ideas &&
          ideas.map((item) => {
            count++;
            let rowclass = count % 2 == 0 ? 'even' : 'odd';
            return (
              <>
                <ListGroupItem
                  key={item.id}
                  className={rowclass == 'even' ? 'active' : ''}
                >
                  <ListGroupItemHeading>
                    {item.fields['title']}
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {item.fields['description']}
                  </ListGroupItemText>
                </ListGroupItem>
              </>
            );
          })}
      </ListGroup>
    </div>
  );
}
