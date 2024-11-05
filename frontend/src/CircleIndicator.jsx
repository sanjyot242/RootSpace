

const CircleIndicator = ({ fill = '#E4E7EC', width = '11', height = '12' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='0 0 11 12'
    fill='none'>
    <circle cx='5.5' cy='6' r='5.5' fill={fill} />
  </svg>
);

export default CircleIndicator;
