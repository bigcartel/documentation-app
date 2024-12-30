import React from 'react';
import { useEffect } from 'react';
import { Button, Paragraph } from '@contentful/f36-components';
import { SidebarAppSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Sidebar = () => {
  const sdk = useSDK<SidebarAppSDK>();

  const getSpace =
    sdk.ids.space === 'pkn4mh4dn52b'
      ? 'site'
      : sdk.ids.space === 'zu7c0c50e24k'
      ? 'blog'
      : 'help';

  const handleClick = () => {
    const type = sdk.ids.contentType;
    let path = 'intro';

    switch (type) {
      case 'article':
        path = 'articles';
        break;
      case 'author':
        path = 'authors';
        break;
      case 'category':
        path = 'categories';
        break;
      case 'config':
        path = `${getSpace}-cover`;
        break;
      case 'customPage':
        path = `custom-pages`;
        break;
      case 'globalNavigation':
        path = `global-navigation`;
        break;
      case 'page':
        path = 'pages';
        break;
      case 'post':
        path = 'posts';
        break;
      case 'tag':
        path = 'tags';
        break;
      case 'topic':
        path = 'topics';
        break;
    }

    const url = `https://bigcartel.github.io/ctfl-documentation/docs/category/${path}`;
    window.open(url, '_blank');
  };

  useEffect(() => sdk.window.startAutoResizer(), [sdk.window]);

  return (
    <Button variant='secondary' isFullWidth onClick={handleClick}>
      View Documentation
    </Button>
  );
};

export default Sidebar;
