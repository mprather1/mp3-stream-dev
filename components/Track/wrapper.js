import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${props => (props.active) ? 'lightsteelblue' : 'slategrey'};
    border: 1px solid black;
    border-radius: 1ch;
    margin: 0.5ch;
    width: 28ch;
    height: 15ch;
  a {
    display: grid;
    align-items: center;
    grid-template-rows: [start row-1] auto [stop end];
    grid-template-columns: [start column-1] auto [column-2] auto [end];

    opacity: 0.8;

    color: black;

    text-decoration: none;

    .cover {
      grid-column: 1;
      grid-row: 1;
      
      svg {
        width: 12ch;
        height: 15ch;
      }
    }

    .active {
      background-color: orange;
    }
    
    .info {
      grid-column: 2;
      grid-row: 1;
      padding-top: 1ch;
      padding-right: 1ch;
      font-size: 1.25ch;
    }

    :visited {
      color: cyan;
    }

    :hover {
      cursor: pointer;
      opacity: 1;
      color: yellow;
      border-color: white;
    }
  }
`

export default Wrapper
