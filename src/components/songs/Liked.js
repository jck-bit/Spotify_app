import {MyList, Img, Order, Icon,Text} from './Liked.styled'

export default function Liked({item:{image, body}}) {
  return(
      <MyList>
          <Order>
              <Icon>
                  <Img img src={`./assets/person/${image}`}/>
                  <Text>{body}</Text>
              </Icon>
          </Order>
      </MyList>
  );
}