const Logo = ({ src, alt, shape, border, isMobile }) => {
let containerContentClass = "logoContainer";
    if (isMobile) {
        containerContentClass = "logoContainerMow";
    };
  return(
  
  <div class={containerContentClass}><br></br>
    <img src={src} alt={alt} className={ shape }/>
  </div>
  );
};

export default Logo;