import React from 'react';

const bqStyles = {
  backgroundColor: 'var(--color-white-1)',
  maxWidth: '50%',
  minHeight: '100%',
  margin: '0 auto',
  padding: '8px',
  borderRadius: '4px',
};

const Banner = (props) => {
  return (
    <div className="header">
      <blockquote style={bqStyles}>
        Avatar: The Last Airbender is a show that affected me deeply and stuck with me over the years." That’s something we’ve heard from countless people of all ages since the show aired in 2005.
              <br /><br />
        The Legend of Portalcast is a reunion of hosts from the podcast Portalcast that was started over 10 years ago when Avatar: The Last Airbender was airing on Nickelodeon. We all became friends through the Avatar fan forums or connected in person and shared our intellectual, prophetical, and humorous opinions.
              <br /><br />
        In this new podcast, we revisit themes, characters, and episodes from the original series and reflect on how the show has shaped us—from raising kids, to starting businesses, to dealing with loss and grief, Avatar: The Last Airbender has been the common thread.
            </blockquote>
    </div>
  );
}

export default Banner;
