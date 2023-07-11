import PropTypes from "prop-types";
import Section from "../Section";

import styles from "../../styles/VideoSection.module.css";
import BlockContent from "../BlockContent";

const VideoSection = ({ file, text }) => {
  return (
    <Section contained={false}>
      <div className={`w-full aspect-square sm:aspect-video ${styles.content}`}>
        <video className={styles.video} autoPlay muted loop>
          <source src={file.asset.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.main}>
          <BlockContent blocks={text} />
        </div>
      </div>
    </Section>
  );
};

VideoSection.propTypes = {
  file: PropTypes.object,
  text: PropTypes.arrayOf(PropTypes.object),
};

export default VideoSection;
