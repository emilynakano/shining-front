import styled from 'styled-components';

export default function Wave() {
  return (
    <Container>
      <div className="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill" />
        </svg>
      </div>
    </Container>
  );
}
const Container = styled.div`
.wave {
    position: absolute;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    margin-top: -1px;
}

.wave svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 56px;
    transform: rotateY(180deg);
}

.wave .shape-fill {
    fill: #FFFFFF;
}
`;
