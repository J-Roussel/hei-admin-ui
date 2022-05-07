import { Button, Show, EditButton, TopToolbar, Link } from 'react-admin'
import { ProfileLayout } from '../profile/ProfileShow'
import Money from '@material-ui/icons/AttachMoney'

const ActionsOnShow = ({ basePath, data, resource, studentId }) => {
  return (
    <TopToolbar>
      <EditButton basePath={basePath} resource={resource} record={data} />
      <Button label='Frais' aria-label='fees' component={Link} to={`/students/${studentId}/fees`}>
        <Money />
      </Button>
    </TopToolbar>
  )
}

const StudentShow = props => (
  <Show title='Étudiants' {...props} actions={<ActionsOnShow studentId={props.match.params.id} />}>
    <ProfileLayout />
  </Show>
)

export default StudentShow
