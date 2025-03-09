import transactionIcon from '../assets/notification/transaction-icon.svg';
import announcementIcon from '../assets/notification/announcement-icon.svg';
import inboxIcon from '../assets/notification/inbox-icon.svg';

export const notificationData = [
    {
      id: 1,
      category: 'Transaction History',
      icon: transactionIcon,
      title: 'Transaction of $200 was successful.',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut turpis vulputate, eleifend sapien eu, malesuada nisl. Maecenas quis mattis metus. Cras bibendum nisl non leo semper porttitor. Suspendisse eget tellus et ipsum vestibulum fermentum. In hac habitasse platea dictumst. Aenean laoreet id lacus quis commodo. Sed ac convallis velit. Morbi auctor lobortis libero, ut hendrerit justo vulputate tincidunt. Pellentesque ut placerat erat, id molestie lectus. Mauris pretium eros a congue pulvinar',
      time: '2 hours ago',
    },
    {
      id: 2,
      category: 'Inbox',
      icon: inboxIcon,
      title: 'You have a new message from John.',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut turpis vulputate, eleifend sapien eu, malesuada nisl. Maecenas quis mattis metus. Cras bibendum nisl non leo semper porttitor. Suspendisse eget tellus et ipsum vestibulum fermentum. In hac habitasse platea dictumst. Aenean laoreet id lacus quis commodo. Sed ac convallis velit. Morbi auctor lobortis libero, ut hendrerit justo vulputate tincidunt. Pellentesque ut placerat erat, id molestie lectus. Mauris pretium eros a congue pulvinar',
      time: '1 hour ago',
    },
    {
      id: 3,
      category: 'Announcement',
      icon: announcementIcon,
      title: 'New feature release: Dark Mode.',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut turpis vulputate, eleifend sapien eu, malesuada nisl. Maecenas quis mattis metus. Cras bibendum nisl non leo semper porttitor. Suspendisse eget tellus et ipsum vestibulum fermentum. In hac habitasse platea dictumst. Aenean laoreet id lacus quis commodo. Sed ac convallis velit. Morbi auctor lobortis libero, ut hendrerit justo vulputate tincidunt. Pellentesque ut placerat erat, id molestie lectus. Mauris pretium eros a congue pulvinar',
      time: '3 hours ago',
    },
    // Add more mock data as needed
  ];