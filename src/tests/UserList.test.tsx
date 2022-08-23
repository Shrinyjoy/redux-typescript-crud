import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserList from '../components/UserList/UserList'

describe('Delete item', () => {
    test('clicking on the OK button deletes the item', async () => {
      render (<UserList />);
      await screen.findByRole('title', { name: /a/i })
      await screen.findAllByRole('button', { name: 'Delete item' })
  
      fireEvent.click(screen.getAllByRole('button', { name: 'Delete item' })[0])
      fireEvent.click(await screen.findByText('OK'))
      expect(screen.getByText(/a/i)).not.toBeInTheDocument()
    })
  })