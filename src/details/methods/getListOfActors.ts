import {Credits, Department} from '../models'

export const getListOfActors = (credits: Credits) => {
  return credits.cast.filter(
    (item) => item.known_for_department === Department.Acting
  )
}
