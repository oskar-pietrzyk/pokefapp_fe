import PokemonMasterRanking from "../../../../src/components/home/pokemon_master_ranking/PokemonMasterRanking";
import React from "react";
import { screen, render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import {server} from '../../support/server';

const playersData = {"players":[{"id":1,"player_bio":"cccc"},{"id":2,"player_bio":"aaaa"},{"id":3,"player_bio":"dddd"}]}

it("returns a list of best players", async () => {
  server.use(
    rest.get('/api/v1/pokemon_master_ranking', (_req, res, ctx) => {
      return res(ctx.json(playersData))
    })
  )
  render(<PokemonMasterRanking />)
  const playersCards = await screen.findByTestId('players');
  expect(playersCards).toBeVisible();
  for (const player of playersData.players) {
    await screen.findByText(player.player_bio)
  }
})

it("returns an empty list", async () => {
  const apiCall = jest.fn()
  server.use(
    rest.get('/api/v1/pokemon_master_ranking', (_req, res, ctx) => {
      apiCall();
      return res(ctx.json([]))
    })
  )

  render(<PokemonMasterRanking />)
  await waitFor (() => (
    expect(apiCall).toHaveBeenCalled()
  ))

  expect(screen.queryByTestId('players')).toBeNull();
})
