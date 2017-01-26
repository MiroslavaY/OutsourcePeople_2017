import React from 'react';
import './Navigation.css';
import NavigationTree from '../../helpersComponents/NavigationTree/NavigationTree';


const navigationDataSource = [
  {
    name: 'Awards',
    href: '#/awards',
    collapsed: true,
    childNodes: [
      {name: 'Awards participant', href: '#/awards_participants', collapsed: true,},
      {name: 'Award partners', href: '#/awards_partners', collapsed: true,},
    ],
  }, {
    name: 'Deadlines settings',
    href: '#/deadline_settings',
    collapsed: true,
  }, {
    name: 'FAQ blocks',
    href: '#/faq_blocks',
    collapsed: true,
  }, {
    name: 'Lightning Talks',
    href: '#/lightning_talks',
    collapsed: true,
  }, {
    name: 'Opened contacts',
    href: '#/opened_contacts',
    collapsed: true,
  }, {
    name: 'Payments',
    href: '#/payments',
    collapsed: true,
  }, {
    name: 'Sales managers',
    href: '#/sales_managers',
    collapsed: true,
  }, {
    name: 'Settings',
    href: '#/settings',
    collapsed: true,
  }, {
    name: 'Slider games',
    href: '#/slider_games',
    collapsed: true,
  }, {
    name: 'Streams',
    href: '#/streams',
    collapsed: true,
  }, {
    name: 'Stream under topic',
    href: '#/stream_under_topic',
    collapsed: true,
  }, {
    name: 'UTMs',
    href: '#/utms',
    collapsed: true,
  }, {
    name: 'Venues',
    href: '#/venues',
    collapsed: true,
  }, {
    name: 'Webinar banners',
    href: '#/webinar_banners',
    collapsed: true,
  }, {
    name: 'Deadlines',
    href: '#/deadlines',
    collapsed: true,
  }, {
    name: 'Conference days',
    href: '#/conference_days',
    collapsed: true,
    childNodes: [{
      name: 'Schedule items',
      href: '#/schedule_items',
      collapsed: true,
      childNodes: [{
        name: 'Speeches',
        href: '#/speeches',
        collapsed: true,
      }, {
        name: 'Closed and/or opened meetups',
        href: '#/closed_meetups',
        collapsed: true,
      }, {
        name: 'Discussions with experts',
        href: '#/expert_discussion',
        collapsed: true,
        childNodes: [{
          name: 'Experts tables',
          href: '#/experts_tables',
          collapsed: true,
        },
        ],
      }, {
        name: 'Events',
        href: '#/events',
        collapsed: true,
      },
      ],
    },],
  }, {
    name: 'Discussions',
    href: '#/discussions',
    collapsed: true,
  }, {
    name: 'Speakers',
    href: '#/speakers',
    collapsed: true,
  }, {
    name: 'Individual links',
    href: '#/individual_links',
    collapsed: true,
  }, {
    name: 'Participant-companies',
    href: '#/participant_companies',
    collapsed: true,
  }, {
    name: 'Common buying of tickets',
    href: '#/wholesales',
    collapsed: true,
  }, {
    name: 'Discounts for common tickets buying',
    href: '#/discounts',
    collapsed: true,
  }, {
    name: 'Currency',
    href: '#/currency',
    collapsed: true,
  }, {
    name: 'News blocks',
    href: '#/news_blocks',
    collapsed: true,
  }, {
    name: 'Participant`s feedbacks',
    href: '#/participant_feedbacks',
    collapsed: true,
  }, {
    name: 'Packages',
    href: '#/packages',
    collapsed: true,
  }, {
    name: 'Partners',
    href: '#/partners',
    collapsed: true,
  }, {
    name: 'Users',
    href: '#/users',
    collapsed: true,
  },{
    name: 'Promocodes',
    href: '#/promocodes',
    collapsed: true,
  },{
    name: 'Promocode partners',
    href: '#/promocode_partners',
    collapsed: true,
  },{
    name: 'Mailchimp list',
    href: '#/mailchimp_list',
    collapsed: true,
  },{
    name: 'Tariffs',
    href: '#/tariffs',
    collapsed: true,
  },{
    name: 'Exhibition`s participants',
    href: '#/exhibitions_participants',
    collapsed: true,
  },{
    name: 'Screens (Slider)',
    href: '#/screen_system',
    collapsed: true,
    childNodes:[{
      name: 'Game',
      href: '#/game',
      collapsed: true,
    },{
      name: 'Programme',
      href: '#/programme',
      collapsed: true,
    },{
      name: 'Slider`s cohesion with slides',
      href: '#/sliders_cohesion',
      collapsed: true,
    },{
      name: 'Slider',
      href: '#/slider',
      collapsed: true,
    },{
      name: 'Slides',
      href: '#/slides',
      collapsed: true,
    },{
      name: 'Photo, advertisement',
      href: '#/sliders_advertisement',
      collapsed: true,
    },{
      name: 'Screens',
      href: '#/screens',
      collapsed: true,
    },],
  },{
    name: 'Contracts',
    href: '#/contracts',
    collapsed: true,
  },{
    name: 'Documents',
    href: '#/documents',
    collapsed: true,
  },
];


export default class Navigation extends React.Component {
  render() {
    return (
      <aside className="admin-navigation-bar">
        <h3>Navigation</h3>
        <NavigationTree
          treeData={navigationDataSource}
        />
      </aside>
    );
  }
}
