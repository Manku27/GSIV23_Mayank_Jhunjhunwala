import {Credits, Job} from '../models'

export const getDirectorsFromCastAndCrew = (credits: Credits) => {
  return credits.crew.find((item) => item.job === Job.Director)?.name || ''
}
