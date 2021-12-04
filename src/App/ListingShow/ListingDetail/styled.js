import styled from 'styled-components';
import React from 'react';

export const S = {
  DivDetailContainer: styled.div`
    margin-left: -8px !important;
    margin-right: -8px !important;
    box-sizing: border-box;
  `,
  DivDetailSummary: styled.div`
    width: 60.5% !important;
    float: left !important;
    padding-left: 8px !important;
    padding-right: 8px !important;
    min-height: 1px !important;
    position: relative !important;
    box-sizing: border-box;
  `,

  DivDetailBooking: styled.div`
    width: 38% !important;
    float: left !important;
    padding-left: 8px !important;
    padding-right: 8px !important;
    min-height: 1px !important;
    position: relative !important;
  `,

  DivBookingContainer: styled.div`
    margin-top: 32px;
    margin-bottom: 24px;
  `,

  DivDividerBorder: styled.div`
    border-bottom: 1px solid #dbdbdb !important;
  `,

  H21xu9tpch: styled.h2`
    color: inherit !important;
    font-size: 1em !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    margin: 0px !important;
    padding: 0px !important;
    display: inline !important;
  `,

  Div1wt9k7hn: styled.div`
    color: #484848 !important;
    margin: 0px !important;
    word-wrap: break-word !important;
    font-size: 16px !important;
    line-height: 22px !important;
    letter-spacing: normal !important;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
  `,
};

export const SVG = {
  kitchen: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m10.5 0a .5.5 0 0 0 -.5.5v7a .5.5 0 0 1 -.49.5h-1.51v-7.5a.5.5 0 1 0 -1 0v7.5h-1.51a.5.5 0 0 1 -.49-.5v-7a .5.5 0 1 0 -1 0v7c0 .83.67 1.5 1.49 1.5h1.51v5c0 .03.01.06.02.09a1.49 1.49 0 0 0 -1.02 1.41v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.66-.43-1.21-1.02-1.41.01-.03.02-.06.02-.09v-5h1.51a1.5 1.5 0 0 0 1.49-1.5v-7a .5.5 0 0 0 -.5-.5zm-2.5 15.5v7a .5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5zm11.5-15.5h-2c-1.4 0-2.5 1.07-2.5 2.5v7c0 1.43 1.1 2.5 2.5 2.5h1.5v2.09a1.49 1.49 0 0 0 -.5-.09c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-22.5zm-2 11c-.86 0-1.5-.63-1.5-1.5v-7c0-.87.65-1.5 1.5-1.5h1.5v10zm1.5 11.5a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5z"
        fillRule="evenodd"
      />
    </svg>
  ),
  wifi: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m12 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5.92-5.78a.5.5 0 1 1 -.84.55c-1.19-1.81-3.07-2.77-5.08-2.77s-3.89.96-5.08 2.78a.5.5 0 0 1 -.84-.55c1.38-2.1 3.58-3.23 5.92-3.23s4.54 1.13 5.92 3.23zm2.98-3.03a.5.5 0 1 1 -.79.61c-1.66-2.14-5.22-3.8-8.11-3.8-2.83 0-6.26 1.62-8.12 3.82a.5.5 0 0 1 -.76-.65c2.05-2.42 5.75-4.17 8.88-4.17 3.19 0 7.05 1.8 8.9 4.19zm2.95-2.33a.5.5 0 0 1 -.71-.02c-2.94-3.07-6.71-4.84-11.14-4.84s-8.2 1.77-11.14 4.85a.5.5 0 0 1 -.72-.69c3.12-3.27 7.14-5.16 11.86-5.16s8.74 1.89 11.86 5.16a.5.5 0 0 1 -.02.71z"
        fillRule="evenodd"
      />
    </svg>
  ),
  hot_tub: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m23.5 23h-.5v-11.09a1.49 1.49 0 0 0 1-1.41 1.5 1.5 0 0 0 -1.5-1.5h-20.99a1.5 1.5 0 0 0 -.5 2.91v11.09h-.5a.5.5 0 1 0 0 1h23a .5.5 0 0 0 0-1zm-19.5 0h-2v-11h2zm3 0h-2v-11h2zm3 0h-2v-11h2zm3 0h-2v-11h2zm3 0h-2v-11h2zm3 0h-2v-11h2zm3 0h-2v-11h2zm0-12h-20.5a.5.5 0 0 1 -.5-.5c0-.28.22-.5.5-.5h20.99a.5.5 0 0 1 .5.5c0 .28-.22.5-.5.5zm-10.88-7.29c-.92-1.26-.76-2.38.06-3.18a2.6 2.6 0 0 1 .66-.48.5.5 0 1 1 .43.9 1.66 1.66 0 0 0 -.4.29c-.48.47-.56 1.04.01 1.83 2.09 2.27 2.09 4.26.34 4.89a.5.5 0 0 1 -.34-.94c.94-.34.94-1.46-.77-3.32zm4 0c-.92-1.26-.76-2.38.06-3.18a2.6 2.6 0 0 1 .66-.48.5.5 0 1 1 .43.9 1.66 1.66 0 0 0 -.4.29c-.48.47-.56 1.04.01 1.83 2.09 2.27 2.09 4.26.34 4.89a.5.5 0 0 1 -.34-.94c.94-.34.94-1.46-.77-3.32zm-8 0c-.92-1.26-.76-2.38.06-3.18a2.6 2.6 0 0 1 .66-.48.5.5 0 1 1 .43.9 1.66 1.66 0 0 0 -.4.29c-.48.47-.56 1.04.01 1.83 2.09 2.27 2.09 4.26.34 4.89a.5.5 0 0 1 -.34-.94c.94-.34.94-1.46-.77-3.32z"
        fillRule="evenodd"
      />
    </svg>
  ),
  desk: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m5.5 5h-.5v8h14v-8zm12.5 7h-12v-6h12zm5.9 6.69-.04-.05-.11-.14-.4-.51-1.2-1.55-1.15-1.47v-10.97a1 1 0 0 0 -.99-1h-16.02c-.55 0-.99.45-.99 1v10.95l-.19.24c-.6.76-1.2 1.53-1.76 2.26l-.16.21c-.29.37-.55.72-.79 1.04l-.1.13v.17c0 1.35.65 2 2 2h20c1.17 0 2-.71 2-2v-.17l-.11-.14zm-19.9-14.69h16.01c-.01 0-.01 7.92-.01 10h-16zm18 16h-20c-.73 0-.96-.2-.99-.85.21-.28.43-.56.66-.87l.16-.21a229.93 229.93 0 0 1 2.33-2.98l.07-.09h15.51l1.6 2.06 1.2 1.55a4708182.18 4708182.18 0 0 1 .42.54c-.05.59-.38.86-.98.86zm-7.52-3.62a.5.5 0 0 0 -.48-.38h-4a .5.5 0 0 0 -.49.38l-.5 2a .5.5 0 0 0 .49.62h5a .5.5 0 0 0 .49-.62l-.5-2zm-4.34 1.62.25-1h3.22l.25 1z"
        fillRule="evenodd"
      />
    </svg>
  ),
  essentials: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m23.5 4h-1.5v-1.5c0-1.38-1.12-2.5-2.5-2.5h-15a2.5 2.5 0 0 0 -2.5 2.5v1.5h-1.5a.5.5 0 1 0 0 1h1.5v15.5c0 .83.67 1.5 1.5 1.5h1.5v.5c0 .83.67 1.5 1.5 1.5h14c .83 0 1.5-.67 1.5-1.5v-17.5h1.5a.5.5 0 0 0 0-1zm-20.5-1.5c0-.82.67-1.5 1.5-1.5h15.01c.82 0 1.49.67 1.49 1.5v1.5h-2v-.51a.5.5 0 0 1 .5-.49.5.5 0 0 0 0-1 1.5 1.5 0 0 0 -1.5 1.5v11.5h-15zm0 13.5h15v2h-15zm .5 5a .5.5 0 0 1 -.5-.5v-1.5h15v1.51c0 .27-.23.5-.5.5h-14zm17.5 1.5c0 .28-.22.5-.5.5h-14a .5.5 0 0 1 -.5-.5v-.5h11.5c.83 0 1.5-.67 1.5-1.5v-15.5h2z"
        fillRule="evenodd"
      />
    </svg>
  ),
  fireplace: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m23.5 23h-1.5v-19a2 2 0 0 0 -.01-4h-19.98a2 2 0 0 0 -.01 4v19h-1.5a.5.5 0 1 0 0 1h23a .5.5 0 0 0 0-1zm-19.5 0h-1v-19h1zm15-19v14h-1.17c.33-1.58.04-3.44-.59-4.72-.24-.5-.49-.93-.92-1.58 0 0-.26-.39-.33-.5-.92-1.43-1.25-2.32-1.16-3.66a.5.5 0 0 0 -.86-.38c-.17.17-.92.88-1.03 1-.8.79-1.29 1.44-1.54 2.19a3.84 3.84 0 0 0 -.23 1.12c-.03.49.01.95.1 1.64l.02.14c-.61-.35-.95-.93-1.14-1.76-.08-.34-.1-.48-.19-1.25a14.33 14.33 0 0 0 -.04-.3.5.5 0 0 0 -.79-.33c-1.8 1.31-3.19 4.37-3.17 7.04 0 .49.07.94.16 1.37h-1.12v-14.02zm-6.72 8.96c-.09-.63-.12-1.03-.09-1.44a2.88 2.88 0 0 1 .17-.85c.2-.58.61-1.13 1.3-1.82l.22-.21c.13 1.02.54 1.91 1.29 3.08l.33.51c.41.62.64 1.02.86 1.47.58 1.18.84 3.01.44 4.4-.52 1.82-2.05 2.89-4.89 2.89-3.31 0-4.89-1.66-4.91-4.38-.02-2 .89-4.28 2.09-5.6.04.28.07.44.13.68.33 1.44 1.1 2.4 2.58 2.78a.5.5 0 0 0 .62-.49c0-.24 0-.26-.11-1.04zm6.72 10.04h-14v-4h1.45c.8 1.87 2.62 3 5.44 3 2.96 0 4.82-1.11 5.63-3h1.48zm2 0h-1v-19h1zm0-20h-18.99a1 1 0 1 1 0-2h19.98a1 1 0 1 1 0 2z"
        fillRule="evenodd"
      />
    </svg>
  ),
  shampoo: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m14.5 4h .5v-1.5c0-1.39-1.12-2.5-2.5-2.5h-.99a2.5 2.5 0 0 0 -2.51 2.5v1.5zm-4.5-1.5c0-.83.67-1.5 1.51-1.5h.99c.83 0 1.5.67 1.5 1.5v.5h-4zm5.5 2.5h-7a3.5 3.5 0 0 0 -3.5 3.49v12.01c0 1.93 1.57 3.5 3.5 3.5h7a3.5 3.5 0 0 0 3.5-3.49v-12.02c0-1.92-1.57-3.49-3.5-3.49zm2.5 15.51a2.5 2.5 0 0 1 -2.5 2.49h-7a2.5 2.5 0 0 1 -2.5-2.49v-12.02a2.5 2.5 0 0 1 2.5-2.49h7a2.5 2.5 0 0 1 2.5 2.49v12.01zm-1-11.01a.5.5 0 0 1 -.5.5h-9a .5.5 0 0 1 0-1h9a .5.5 0 0 1 .5.5z"
        fillRule="evenodd"
      />
    </svg>
  ),
  heat: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m16 13.54v-9.55a4 4 0 0 0 -4-3.99c-2.21 0-4 1.79-4 3.99v9.55a5.98 5.98 0 0 0 -2 4.46 6 6 0 1 0 12 0 5.98 5.98 0 0 0 -2-4.46zm-4 9.46a5 5 0 0 1 -3.18-8.86.5.5 0 0 0 .18-.39v-9.76a3 3 0 0 1 3-2.99c1.66 0 3 1.34 3 2.99v9.77a.5.5 0 0 0 .18.39 5 5 0 0 1 -3.18 8.85zm2-8.45v-10.54a2 2 0 1 0 -4 0v10.54a3.99 3.99 0 0 0 -2 3.45 4 4 0 0 0 8 0 3.99 3.99 0 0 0 -2-3.45zm-2 6.45a3 3 0 0 1 -1.29-5.71.5.5 0 0 0 .28-.45v-10.83a1 1 0 1 1 2 0v10.83a.5.5 0 0 0 .28.45 3 3 0 0 1 -1.27 5.71z"
        fillRule="evenodd"
      />
    </svg>
  ),
  air_conditioning: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m21.89 18a .5.5 0 0 1 -.68.18l-3.29-1.9.79 2.93a.5.5 0 0 1 -.97.26l-1.04-3.89-4.7-2.71v5.43l2.85 2.85a.5.5 0 1 1 -.71.71l-2.14-2.15v3.79a.5.5 0 1 1 -1 0v-3.79l-2.15 2.15a.5.5 0 1 1 -.71-.71l2.86-2.86v-5.43l-4.7 2.72-1.04 3.9a.5.5 0 1 1 -.97-.26l.79-2.93-3.28 1.9a.5.5 0 0 1 -.5-.87l3.28-1.9-2.93-.79a.5.5 0 0 1 -.35-.61.51.51 0 0 1 .61-.35l3.89 1.04 4.7-2.71-4.7-2.71-3.9 1.04a.5.5 0 0 1 -.61-.35.5.5 0 0 1 .35-.61l2.93-.79-3.28-1.9a.5.5 0 1 1 .5-.87l3.28 1.9-.78-2.93a.5.5 0 0 1 .97-.26l1.04 3.9 4.7 2.71v-5.42l-2.85-2.86a.5.5 0 1 1 .71-.71l2.14 2.15v-3.79a.5.5 0 1 1 1 0v3.79l2.15-2.15a.5.5 0 1 1 .71.71l-2.86 2.86v5.43l4.7-2.71 1.04-3.9a.5.5 0 1 1 .97.26l-.79 2.93 3.29-1.9a.5.5 0 1 1 .5.87l-3.29 1.89 2.93.79a.5.5 0 1 1 -.26.97l-3.89-1.05-4.7 2.71 4.7 2.71 3.9-1.05a.5.5 0 0 1 .26.97l-2.93.79 3.29 1.9a.5.5 0 0 1 .18.68z"
        fillRule="evenodd"
      />
    </svg>
  ),
  breakfast: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m20 11h-19.5a.5.5 0 0 0 -.5.5v2c0 5.79 4.24 10.5 9.5 10.5 3.43 0 6.41-2.01 8.08-5h2.42a4 4 0 0 0 0-8zm-10.5 12c-4.68 0-8.5-4.24-8.5-9.5v-1.5h17v1.5c0 5.26-3.82 9.5-8.5 9.5zm10.5-5h-1.93c.59-1.37.93-2.89.93-4.5v-1.5h1a3 3 0 0 1 0 6zm-11.9-13.7c-.96-1.28-.96-2.53-.37-3.58a2.7 2.7 0 0 1 .42-.57.5.5 0 0 1 .71.71 1.73 1.73 0 0 0 -.25.35c-.41.73-.41 1.55.3 2.49 1.5 2 1.6 3.85.48 5.13a.5.5 0 1 1 -.75-.66c.79-.89.71-2.22-.53-3.87zm-4.49 1.03c-.77-.89-.77-1.85-.31-2.7a2.5 2.5 0 0 1 .32-.46.5.5 0 1 1 .74.67c-.04.04-.1.13-.18.26-.28.52-.28 1.04.15 1.54 2.12 2 2.16 3.22.45 4.29a.5.5 0 1 1 -.53-.85c1.09-.68 1.08-1.12-.64-2.75zm9 0c-.77-.89-.77-1.85-.31-2.7a2.5 2.5 0 0 1 .32-.46.5.5 0 1 1 .74.67c-.04.04-.1.13-.18.26-.28.52-.28 1.04.15 1.54 2.12 2 2.16 3.22.45 4.29a.5.5 0 0 1 -.53-.85c1.09-.68 1.08-1.12-.64-2.75z"
        fillRule="evenodd"
      />
    </svg>
  ),
  iron: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m23.99 18.38-.5-2a .5.5 0 0 0 -.49-.38h-22a .5.5 0 0 0 -.49.38l-.5 2a .5.5 0 0 0 .49.62h23a .5.5 0 0 0 .49-.62zm-1.13-.38h-21.72l.25-1h21.22zm-21.36-3h21a .5.5 0 0 0 .5-.53c-.21-3.22-1.22-5.47-3-5.47a4911.8 4911.8 0 0 0 -8.8 0h-1.71c-.2 0-.26-.08-.19-.27a9.59 9.59 0 0 1 .17-.48c.13-.34.27-.68.43-1 .41-.79.82-1.25 1.1-1.25h10.5c.87 0 1.43-.7 1.4-1.52s-.64-1.48-1.55-1.48h-11.35c-3.84 0-7.29 4.4-8.99 11.38a.5.5 0 0 0 .49.62zm8.5-11h11.35c.35 0 .55.21.56.52.01.29-.14.48-.4.48h-10.51c-.8 0-1.42.68-1.99 1.8a10.74 10.74 0 0 0 -.65 1.61c-.31.82.23 1.59 1.13 1.59h1.71a33801.74 33801.74 0 0 1 8.8 0c .94 0 1.71 1.58 1.95 4h-19.8c1.65-6.21 4.7-10 7.85-10zm5 8a1 1 0 1 1 2 0 1 1 0 0 1 -2 0zm3 0a1 1 0 1 1 2 0 1 1 0 0 1 -2 0z"
        fillRule="evenodd"
      />
    </svg>
  ),
  hair_dryer: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m6.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm10.15-4.09a125.01 125.01 0 0 0 -1.43-.45 217.8 217.8 0 0 0 -3.98-1.21c-2.68-.78-4.51-1.23-5.24-1.25-3.43.04-6.01 2.28-6.01 5.5 0 2 .98 3.62 2.53 4.57 0 .02 0 .04.01.06.19.68.31 1.6.39 2.7a40.42 40.42 0 0 1 .05 4.17 2.01 2.01 0 0 0 2.03 2h2.03c1.25 0 1.97-.73 1.97-1.98 0-.07 0-.14 0-.31-.03-1.86.16-3.27.89-4.81a7.75 7.75 0 0 1 1-1.59.5.5 0 0 0 .09-.17 71.83 71.83 0 0 0 1.53-.4 97.27 97.27 0 0 0 4.15-1.24.5.5 0 0 0 .34-.48v-4.65a.5.5 0 0 0 -.35-.48zm-7.67 8.57c-.81 1.71-1.01 3.26-.98 5.25v.29c0 .7-.28.98-.97.98h-2.03c-.6 0-1.03-.48-1.03-.98a41.35 41.35 0 0 0 -.05-4.26 18.74 18.74 0 0 0 -.26-2.15c.71.25 1.5.39 2.33.39.85 0 2.05-.19 3.53-.51-.21.32-.39.65-.55.99zm7.02-6.98v3.17a96.43 96.43 0 0 1 -3.76 1.11 69.77 69.77 0 0 1 -1.72.45c-1.98.49-3.55.76-4.52.76-2.89 0-5-1.85-5-4.5 0-2.63 2.11-4.47 5.01-4.5.59.01 2.41.46 4.97 1.21a216.71 216.71 0 0 1 4.99 1.53l.04.01v.75zm7.92 3.1a1.91 1.91 0 0 1 -.42.46 1.97 1.97 0 0 1 -1.25.44c-.47 0-.8-.15-1.51-.57-.54-.33-.77-.43-.99-.43-.3 0-.55.05-.75.13a.91.91 0 0 0 -.19.09.5.5 0 0 1 -.62-.78c.09-.07.24-.16.44-.24a3.01 3.01 0 0 1 1.12-.2c.47 0 .8.15 1.51.57.54.33.77.43.99.43a.98.98 0 0 0 .63-.22.98.98 0 0 0 .2-.21.5.5 0 0 1 .85.53zm-5.81-2.95a.5.5 0 0 1 .08-.7c.09-.07.24-.16.44-.24a3.01 3.01 0 0 1 1.12-.2c.47 0 .8.15 1.51.57.54.33.77.43.99.43a.98.98 0 0 0 .63-.22.98.98 0 0 0 .2-.21.5.5 0 0 1 .85.53 1.91 1.91 0 0 1 -.42.46 1.97 1.97 0 0 1 -1.25.44c-.47 0-.8-.15-1.51-.57-.54-.33-.77-.43-.99-.43-.3 0-.55.05-.75.13a.91.91 0 0 0 -.19.09.5.5 0 0 1 -.7-.08z"
        fillRule="evenodd"
      />
    </svg>
  ),
  private_entrance: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m17.5 17a .5.5 0 0 0 -.5.5v2.11c0 .22-.16.39-.33.39h-3.67v-15.03a.5.5 0 0 0 -.32-.47 477.53 477.53 0 0 0 -1.9-.73 737.69 737.69 0 0 0 -4.22-1.61l-.27-.1c-1.08-.4-2.03-.75-2.87-1.06h13.19c.22 0 .39.18.39.41v4.09a.5.5 0 0 0 1 0v-4.09c0-.78-.62-1.41-1.39-1.41h-16.11c-.02 0-.03.01-.05.01a.48.48 0 0 0 -.36.22c-.01.02-.03.04-.04.06a.49.49 0 0 0 -.05.21v17.8c0 .76.56 1.55 1.27 1.81l10.12 3.77c.85.32 1.62-.21 1.62-1.11v-1.77h3.67c.73 0 1.32-.63 1.32-1.39v-2.11a.5.5 0 0 0 -.5-.5zm-5.5 5.77c0 .2-.07.25-.27.18l-10.11-3.78c-.32-.12-.62-.54-.62-.88v-17.09c1.1.38 2.79 1 4.94 1.81l.27.1a738.69 738.69 0 0 1 5.79 2.21zm-2-11.27v3a .5.5 0 0 1 -1 0v-3a .5.5 0 1 1 1 0zm10-1.41v-.59a2.5 2.5 0 1 0 -5 0v .59a1.5 1.5 0 0 0 -1 1.41v3c0 .83.67 1.5 1.49 1.5h4.02a1.5 1.5 0 0 0 1.49-1.5v-3c0-.66-.42-1.21-1-1.41zm-4-.59a1.5 1.5 0 0 1 3 0v .5h-3zm4 5a .5.5 0 0 1 -.49.5h-4.02a.49.49 0 0 1 -.49-.5v-3a .5.5 0 0 1 .49-.5h4.02c.27 0 .49.22.49.5z"
        fillRule="evenodd"
      />
    </svg>
  ),
  smoke_detector: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m14.78 5.41-.45-.22.44-.9.45.22a9.39 9.39 0 0 1 4.23 4.11l.23.44-.89.46-.23-.44a8.4 8.4 0 0 0 -3.77-3.67zm.44 14.09-.45.22-.44-.9.45-.22a8.4 8.4 0 0 0 3.77-3.67l.23-.44.89.46-.23.44a9.4 9.4 0 0 1 -4.23 4.11zm.56-15.54-.45-.22.44-.9.45.22a10.51 10.51 0 0 1 4.73 4.59l.23.45-.89.46-.23-.45a9.52 9.52 0 0 0 -4.27-4.15zm4.5 11.51.89.46-.23.44a10.51 10.51 0 0 1 -4.73 4.59l-.45.22-.44-.9.45-.22a9.52 9.52 0 0 0 4.27-4.15zm-11.07 3.14.45.22-.44.9-.45-.22a9.41 9.41 0 0 1 -4.23-4.11l-.23-.44.89-.46.23.44a8.4 8.4 0 0 0 3.78 3.67zm.01-14.31.44.9-.45.22a8.4 8.4 0 0 0 -3.78 3.67l-.23.44-.89-.46.23-.44a9.4 9.4 0 0 1 4.23-4.11zm-5.52 4.26-.89-.46.23-.45a10.52 10.52 0 0 1 4.73-4.59l.45-.22.44.9-.45.22c-1.84.9-3.36 2.37-4.28 4.15zm4.5 11.51.45.22-.44.9-.45-.22a10.52 10.52 0 0 1 -4.73-4.59l-.23-.44.89-.46.23.44a9.52 9.52 0 0 0 4.28 4.15zm3.78 2.95c-6.07 0-11-4.93-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm0-23c-6.62 0-12 5.38-12 12s5.38 12 12 12 12-5.38 12-12-5.38-12-12-12zm10 12a1 1 0 1 1 -2 0 1 1 0 0 1 2 0zm-10 2c-1.1 0-2-.9-2-2s .9-2 2-2 2 .9 2 2-.9 2-2 2zm0-5c-1.66 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-1.66-1.35-3-3-3zm0 7c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-9c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"
        fillRule="evenodd"
      />
    </svg>
  ),
  carbon_monoxide_detector: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m15.25 14c .97 0 1.75-.9 1.75-2s-.79-2-1.75-2-1.75.9-1.75 2 .79 2 1.75 2zm0 1c-1.52 0-2.75-1.35-2.75-3s1.23-3 2.75-3 2.75 1.35 2.75 3-1.23 3-2.75 3zm3.31-5.93.23.45.89-.46-.23-.45a9.4 9.4 0 0 0 -4.22-4.11l-.45-.22-.44.9.45.22a8.4 8.4 0 0 1 3.78 3.67zm.89 6.32.23-.45-.89-.46-.23.45a8.4 8.4 0 0 1 -3.78 3.67l-.45.22.44.9.45-.22a9.4 9.4 0 0 0 4.22-4.11zm.61.51c-.92 1.78-2.44 3.26-4.28 4.15l-.45.22.44.9.45-.22a10.51 10.51 0 0 0 4.72-4.59l.23-.44-.89-.46zm2.94-3.9c0-6.07-4.93-11-11-11s-11 4.93-11 11 4.93 11 11 11 11-4.93 11-11zm1 0c0 6.62-5.38 12-12 12s-12-5.38-12-12 5.38-12 12-12 12 5.38 12 12zm-19.44-3.39-.23.45.89.46.23-.45a8.4 8.4 0 0 1 3.78-3.67l.45-.22-.44-.9-.45.22a9.4 9.4 0 0 0 -4.22 4.11zm-.61 7.29-.23-.44-.89.46.23.44a10.51 10.51 0 0 0 4.72 4.59l.45.22.44-.9-.45-.22c-1.84-.9-3.36-2.37-4.28-4.15zm0-7.8c.92-1.78 2.44-3.26 4.28-4.15l.45-.22-.44-.9-.45.22a10.51 10.51 0 0 0 -4.72 4.59l-.23.44.89.46zm1.5 6.83-.23-.45-.89.46.23.45a9.4 9.4 0 0 0 4.22 4.11l.45.22.44-.9-.45-.22a8.4 8.4 0 0 1 -3.78-3.67zm3.4-4.93c.73 0 1.39.47 1.69 1.19l.93-.38c-.45-1.1-1.48-1.81-2.62-1.81-1.57 0-2.85 1.35-2.85 3s1.28 3 2.85 3c1.14 0 2.16-.71 2.62-1.81l-.93-.38c-.3.72-.96 1.19-1.69 1.19-1.02 0-1.85-.9-1.85-2s .83-2 1.85-2zm11.21-1.9.23.44.89-.46-.23-.44a10.51 10.51 0 0 0 -4.72-4.59l-.45-.22-.44.9.45.22c1.84.9 3.36 2.37 4.28 4.15zm1.94 3.9a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z"
        fillRule="evenodd"
      />
    </svg>
  ),
  first_aid_kit: 'First aid kit',
  fire_extinguisher: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m23.5 23h-1.5v-19a2 2 0 0 0 -.01-4h-19.98a2 2 0 0 0 -.01 4v19h-1.5a.5.5 0 1 0 0 1h23a .5.5 0 0 0 0-1zm-19.5 0h-1v-19h1zm15-19v14h-1.17c.33-1.58.04-3.44-.59-4.72-.24-.5-.49-.93-.92-1.58 0 0-.26-.39-.33-.5-.92-1.43-1.25-2.32-1.16-3.66a.5.5 0 0 0 -.86-.38c-.17.17-.92.88-1.03 1-.8.79-1.29 1.44-1.54 2.19a3.84 3.84 0 0 0 -.23 1.12c-.03.49.01.95.1 1.64l.02.14c-.61-.35-.95-.93-1.14-1.76-.08-.34-.1-.48-.19-1.25a14.33 14.33 0 0 0 -.04-.3.5.5 0 0 0 -.79-.33c-1.8 1.31-3.19 4.37-3.17 7.04 0 .49.07.94.16 1.37h-1.12v-14.02zm-6.72 8.96c-.09-.63-.12-1.03-.09-1.44a2.88 2.88 0 0 1 .17-.85c.2-.58.61-1.13 1.3-1.82l.22-.21c.13 1.02.54 1.91 1.29 3.08l.33.51c.41.62.64 1.02.86 1.47.58 1.18.84 3.01.44 4.4-.52 1.82-2.05 2.89-4.89 2.89-3.31 0-4.89-1.66-4.91-4.38-.02-2 .89-4.28 2.09-5.6.04.28.07.44.13.68.33 1.44 1.1 2.4 2.58 2.78a.5.5 0 0 0 .62-.49c0-.24 0-.26-.11-1.04zm6.72 10.04h-14v-4h1.45c.8 1.87 2.62 3 5.44 3 2.96 0 4.82-1.11 5.63-3h1.48zm2 0h-1v-19h1zm0-20h-18.99a1 1 0 1 1 0-2h19.98a1 1 0 1 1 0 2z"
        fillRule="evenodd"
      />
    </svg>
  ),
  pool: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m12 5c-.68 0-1.35.02-2 .06v-2.57c0-.83-.67-1.5-1.5-1.5h-1a .5.5 0 1 0 0 1h1a .5.5 0 0 1 .5.5v.49l-.12.03-3.88.97v-.49c0-.83-.67-1.5-1.5-1.5h-1a .5.5 0 1 0 0 1h1a .5.5 0 0 1 .5.5v2.71c-1.86.7-3 1.66-3 2.8v11c0 2.36 4.93 4 11 4s11-1.64 11-4v-11c0-2.36-4.93-4-11-4zm-7 2v-.09c1.11-.34 2.48-.61 4-.76v.83l-.12.03-3.88.97zm.12-2.02 3.88-.97v1.13c-1.48.14-2.84.39-4 .72v-.85zm-1.12 2.28v2.73a.5.5 0 0 0 1 0v-.99l.12-.03 3.88-.97v.99a.5.5 0 0 0 1 0v-2.93a30.1 30.1 0 0 1 2-.07c5.52 0 10 1.49 10 3s-4.48 3-10 3-10-1.49-10-3c0-.61.75-1.22 2-1.73zm-2 12.73v-9.28c.5.41 1.18.77 2 1.07v9.93c-1.25-.51-2-1.12-2-1.73zm3 2v-9.87c.61.18 1.29.33 2 .45v9.98a18.39 18.39 0 0 1 -2-.48zm3-9.26c.64.09 1.31.15 2 .19v10a27.33 27.33 0 0 1 -2-.21zm3 10.24v-10c .33.01.66.02 1 .02s.67-.01 1-.02v10a30.46 30.46 0 0 1 -2 0zm3-10.05c.69-.04 1.36-.11 2-.19v9.99c-.64.09-1.3.16-2 .21zm3-.35a19.26 19.26 0 0 0 2-.45v9.95a18.44 18.44 0 0 1 -2 .48zm3 9.14v-9.93c.82-.31 1.5-.67 2-1.07v9.28c0 .61-.75 1.22-2 1.73z"
        fillRule="evenodd"
      />
    </svg>
  ),
  washer: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m5 3.5a1.5 1.5 0 1 0 -3 0 1.5 1.5 0 0 0 3 0zm-1.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm4 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-2a .5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm4.5 3c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 15c-3.77 0-6.84-2.99-6.99-6.73.35-.23.84-.57.85-.57 1.64-1.05 3.31-1.06 5.85.71 2.88 2.01 4.99 1.99 6.96.73l.25-.17c-.47 3.4-3.39 6.03-6.92 6.03zm6.13-6.7c-1.64 1.05-3.31 1.06-5.85-.71-2.88-2.01-4.99-1.99-6.96-.73l-.25.17c.48-3.4 3.4-6.03 6.93-6.03 3.77 0 6.84 2.99 6.99 6.73-.35.23-.84.57-.85.57zm3.37-14.3h-19a2.51 2.51 0 0 0 -2.5 2.5v19c0 1.38 1.12 2.5 2.5 2.5h19c1.38 0 2.5-1.12 2.5-2.5v-19c0-1.37-1.12-2.5-2.5-2.5zm1.5 21.5c0 .83-.68 1.5-1.5 1.5h-19c-.83 0-1.5-.68-1.5-1.5v-19c0-.82.68-1.5 1.5-1.5h19c .83 0 1.5.68 1.5 1.5z"
        fillRule="evenodd"
      />
    </svg>
  ),
  closet: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m23.75 16.07-11.75-6.9v-1.23c1.08-.27 2-1.34 2-2.44a2.5 2.5 0 1 0 -5 0 .5.5 0 0 0 1 0 1.5 1.5 0 1 1 3 0c0 .72-.78 1.5-1.5 1.5a.5.5 0 0 0 -.5.5v1.77l-10.77 6.81a.48.48 0 0 0 -.23.41v.01c0 .26.19.51.5.51h23c .32 0 .51-.26.5-.52v-.01a.48.48 0 0 0 -.25-.41zm-21.52-.07 9.36-5.92 10.07 5.92z"
        fillRule="evenodd"
      />
    </svg>
  ),
  tv: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m21.5 6h-9.07l3.49-5.22a.5.5 0 1 0 -.83-.55l-3.86 5.77h-2.46l-3.85-5.78a.5.5 0 0 0 -.83.55l3.48 5.23h-5.07a2.5 2.5 0 0 0 -2.5 2.5v13c0 1.39 1.12 2.5 2.5 2.5h19c1.38 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.12-2.5-2.5-2.5zm1.5 15.5c0 .83-.68 1.5-1.5 1.5h-19c-.83 0-1.5-.67-1.5-1.5v-13c0-.83.68-1.5 1.5-1.5h19c .83 0 1.5.67 1.5 1.5zm-6.49-12.5h-11.02a2.49 2.49 0 0 0 -2.49 2.49v7.02a2.5 2.5 0 0 0 2.49 2.49h11.02a2.49 2.49 0 0 0 2.49-2.49v-7.02a2.5 2.5 0 0 0 -2.49-2.49zm1.49 9.51c0 .82-.67 1.49-1.49 1.49h-11.02c-.82 0-1.49-.67-1.49-1.49v-7.02c0-.82.67-1.49 1.49-1.49h11.02c.82 0 1.49.67 1.49 1.49zm4-8.51a1 1 0 1 1 -2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z"
        fillRule="evenodd"
      />
    </svg>
  ),
  dryer: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m5 3.5a1.5 1.5 0 1 0 -3 0 1.5 1.5 0 0 0 3 0zm-1.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm4 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-2a .5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm4.5 3c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 15c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm9.5-21h-19a2.51 2.51 0 0 0 -2.5 2.5v19c0 1.38 1.12 2.5 2.5 2.5h19c1.38 0 2.5-1.12 2.5-2.5v-19c0-1.38-1.12-2.5-2.5-2.5zm1.5 21.5c0 .83-.68 1.5-1.5 1.5h-19c-.83 0-1.5-.68-1.5-1.5v-19c0-.83.68-1.5 1.5-1.5h19c .83 0 1.5.68 1.5 1.5zm-6.17-6.12a.5.5 0 0 1 .04.71 2.49 2.49 0 0 1 -.63.48c-1.15.65-2.67.65-4.49-.38-1.52-.85-2.66-.85-3.51-.38a1.57 1.57 0 0 0 -.37.27.5.5 0 1 1 -.75-.66 2.49 2.49 0 0 1 .63-.48c1.15-.65 2.67-.65 4.49.38 1.52.85 2.66.85 3.51.38a1.57 1.57 0 0 0 .37-.27.5.5 0 0 1 .71-.04zm0-3.5a.5.5 0 0 1 .04.71 2.49 2.49 0 0 1 -.63.48c-1.15.65-2.67.65-4.49-.38-1.52-.85-2.66-.85-3.51-.38a1.57 1.57 0 0 0 -.37.27.5.5 0 1 1 -.75-.66 2.49 2.49 0 0 1 .63-.48c1.15-.65 2.67-.65 4.49.38 1.52.85 2.66.85 3.51.38a1.57 1.57 0 0 0 .37-.27.5.5 0 0 1 .71-.04z"
        fillRule="evenodd"
      />
    </svg>
  ),
  parking: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm .5-17h-4.5v11.5a.5.5 0 0 0 1 0v-4.5h3.5c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5zm0 6h-3.5v-5h3.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5z"
        fillRule="evenodd"
      />
    </svg>
  ),
  elevator: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="M22.5 23H21V1h1.5a.5.5 0 0 0 0-1H.5a.5.5 0 1 0 0 1H2v22H.5a.5.5 0 1 0 0 1h22a.5.5 0 0 0 0-1zM11 3v20H3V1h8v2zm9 20h-8V1h8v22zM4.146 10.854a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 1 1-.708.708L7 9.707V14.5a.5.5 0 0 1-1 0V9.707l-1.146 1.147a.5.5 0 0 1-.708 0zm10 2a.5.5 0 1 1 .708-.708L16 13.293V8.5a.5.5 0 1 1 1 0v4.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2z"
        fillRule="evenodd"
      />
    </svg>
  ),
  gym: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1.2em',
        width: '1.2em',
        fill: 'currentcolor',
      }}
    >
      <path
        d="m22 10v-2.5a1.5 1.5 0 0 0 -2.06-1.39 1.5 1.5 0 0 0 -2.94.39v3.5h-10v-3.5a1.5 1.5 0 0 0 -1.5-1.5c-.7 0-1.27.47-1.44 1.11a1.5 1.5 0 0 0 -2.06 1.39v2.5c-1.1 0-2 .89-2 2s .89 2 2 2v2.5a1.5 1.5 0 0 0 2.06 1.39 1.5 1.5 0 0 0 2.94-.39v-3.5h10v3.5a1.5 1.5 0 0 0 1.5 1.5c.7 0 1.27-.47 1.44-1.11a1.5 1.5 0 0 0 2.06-1.38v-2.51c1.11 0 2-.89 2-2s-.9-2-2-2zm-20 3c-.56 0-1-.45-1-1a1 1 0 0 1 1-1zm1.5 4a .5.5 0 0 1 -.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9.01a.5.5 0 0 1 -.5.5zm2.5.5a.5.5 0 1 1 -1 0v-11a .5.5 0 1 1 1 0zm11-4.5h-10v-2h10zm2-5.5v10a .5.5 0 1 1 -1 0v-11a .5.5 0 1 1 1 0zm2 9.01a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-9.01c0-.28.22-.5.5-.5s.5.22.5.5zm1-3.51v-2a1 1 0 0 1 1 1c0 .56-.44 1-1 1z"
        fillRule="evenodd"
      />
    </svg>
  ),
};
