// @ts-ignore
import mux from 'mux-embed';
import React, { useEffect, useRef } from 'react';

export default function VideoPlayer () {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const initTime = mux.utils.now();

      mux.monitor('#my-player', {
        debug: false,
        data: {
          env_key: '73v4qme3nao135bsc9k2le2vp', // required
      
          // Site Metadata
          viewer_user_id: '', // ex: '12345'
          experiment_name: '', // ex: 'player_test_A'
          sub_property_id: '', // ex: 'cus-1'
      
          // Player Metadata
          player_name: '', // ex: 'My Main Player'
          player_version: '', // ex: '1.0.0'
          player_init_time: '', // ex: 1451606400000
      
          // Video Metadata
          video_id: '', // ex: 'abcd123'
          video_title: '', // ex: 'My Great Video'
          video_series: '', // ex: 'Weekly Great Videos'
          video_duration: '', // in milliseconds, ex: 120000
          video_stream_type: '', // 'live' or 'on-demand'
          video_cdn: '' // ex: 'Fastly', 'Akamai'
        }
      });
      


    }
  }, [videoRef]);

  return (
    <video
      controls
      ref={videoRef}
      src="https://muxed.s3.amazonaws.com/leds.mp4"
      style={{ width: '100%', maxWidth: '500px' }}
    />
  );
}