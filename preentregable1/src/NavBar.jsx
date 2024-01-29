import Cartwidget from "./CartWidget"

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="../public/logo.png" alt="logo" height={50}/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Telefonos</a></li>
                  <li><a class="dropdown-item" href="#">Laptops</a></li>
                  <li><a class="dropdown-item" href="#">Audio</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Perfil (no disponible)</a>
              </li>
              <Cartwidget />
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar