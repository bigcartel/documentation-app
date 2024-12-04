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
        path = 'category/articles';
        break;
      case 'author':
        path = 'category/authors';
        break;
      case 'category':
        path = 'category/categories';
        break;
      case 'config':
        path = `category/${getSpace}-cover`;
        break;
      case 'customPage':
        path = `category/custom-page`;
        break;
      case 'page':
        const slug = sdk.entry.fields['permalink'].getValue('en-US');

        if (slug.includes('about')) path = 'company/about';
        else if (slug.includes('alternative')) path = 'product/compare';
        else if (slug.includes('craft')) path = 'craft-industries';
        else if (slug.includes('examples')) path = 'product/examples';
        else if (slug.includes('makers')) path = 'product/for-makers';
        else if (slug.includes('gold')) path = 'plans/gold';
        else if (slug.includes('holiday')) path = 'holiday-toolkit';
        else if (slug.includes('home')) path = 'homepage';
        else if (slug.includes('jobs')) path = 'company/jobs';
        else if (slug.includes('premium')) path = 'plans/premium';
        else if (slug.includes('pricing')) path = 'product/pricing';
        else if (slug.includes('templates')) path = 'product/templates';

        break;
      case 'post':
        path = 'category/posts';
        break;
      case 'tag':
        path = 'category/tags';
        break;
      case 'topic':
        path = 'category/topics';
        break;
    }

    const url = `https://bigcartel.github.io/ctfl-documentation/docs/${path}`;
    window.open(url, '_blank');
  };

  useEffect(() => sdk.window.startAutoResizer(), [sdk.window]);

  return (
    <Button variant='secondary' isFullWidth onClick={handleClick}>
      View the Documentation
    </Button>
  );
};

export default Sidebar;
