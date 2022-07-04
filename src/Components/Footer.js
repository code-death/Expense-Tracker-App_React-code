import { Github, Twitter, Dribbble } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
      <div className='col-md-4 d-flex align-items-center ms-5'>
        <span className='mb-3 mb-md-0 text-muted'>© 2022 Poorvansh Kavta</span>
      </div>

      <ul className='nav col-md-4 me-5 justify-content-end list-unstyled d-flex'>
        <li className='ms-3'>
          <a
            className='text-muted'
            target='blank'
            href='https://dribbble.com/poorvanshkavta'
          >
            <h2>
              <Dribbble className='dribbble-icon' />
            </h2>
          </a>
        </li>
        <li className='ms-3'>
          <a
            className='text-muted'
            target='blank'
            href='https://github.com/code-death'
          >
            <h2>
              <Github className='github-icon' />
            </h2>
          </a>
        </li>
        <li className='ms-3'>
          <a
            className='text-muted'
            target='blank'
            href='https://twitter.com/kpoorvansh'
          >
            <h2>
              <Twitter className='twitter-icon' />
            </h2>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
