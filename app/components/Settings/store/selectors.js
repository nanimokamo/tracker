import { createSelector } from 'reselect';

export const getSettings = (state) => state.settings;
export const getWeightUnit = createSelector(
	[getSettings],
	(settings) => settings.weightUnit,
);
