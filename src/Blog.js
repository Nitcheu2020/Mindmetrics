
import React, { useState } from "react";
import {
  FacebookShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import TextKey from './text/TextKey';

const widthScreen = (taille) =>  {
  return taille * 100/2063 + 'vw';
}

function Blog(props) {
    //const shareUrl = 'http://github.com';
    const title =  TextKey.shareApi;
    const [ shareUrl, setShareUrl] = useState(props.url? props.url:'http://mindmetrics.io/');
  return (
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <div className="Demo__some-network" style={{paddingRight:widthScreen(5)}}>
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <div style={{paddingRight:widthScreen(2)}}>
            <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
              {count => count}
            </FacebookShareCount>
          </div>
        </div>

        <div className="Demo__some-network" style={{paddingRight:widthScreen(2)}}>
          <FacebookMessengerShareButton
            url={shareUrl}
            appId="521270401588372"
            className="Demo__some-network__share-button"
          >
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
        </div>

        <div className="Demo__some-network" style={{paddingRight:widthScreen(2)}}>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>

        
        <div className="Demo__some-network" style={{paddingRight:widthScreen(2)}}>
          <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>


    </div>
  );
}
export default Blog;
