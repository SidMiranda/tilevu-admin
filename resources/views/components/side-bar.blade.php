<aside class="mdc-drawer mdc-drawer--dismissible mdc-drawer--open">
    <div class="mdc-drawer__header">
      <h2 class="brand-logo text-white">Tilevu</h2>
    </div>
    <div class="mdc-drawer__content">
      <div class="mdc-list-group">
        <nav class="mdc-list mdc-drawer-menu">
          <div class="mdc-list-item mdc-drawer-item">
            <a class="mdc-drawer-link" href="{{ route('dash') }}">
              <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">home</i>
              Dashboard
            </a>
          </div>
          <div class="mdc-list-item mdc-drawer-item">
            <a class="mdc-drawer-link" href="{{ route('pdv') }}">
              <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">track_changes</i>
              PDV
            </a>
          </div>
          <div class="mdc-list-item mdc-drawer-item">
            <a class="mdc-expansion-panel-link" href="#" data-toggle="expansionPanel" data-target="ui-sub-menu">
              <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">dashboard</i>
              Cadastro
              <i class="mdc-drawer-arrow material-icons">chevron_right</i>
            </a>
            <div class="mdc-expansion-panel" id="ui-sub-menu">
              <nav class="mdc-list mdc-drawer-submenu">
                <div class="mdc-list-item mdc-drawer-item">
                  <a class="mdc-drawer-link" href="pages/ui-features/buttons.html">
                    Categorias
                  </a>
                </div>
                <div class="mdc-list-item mdc-drawer-item">
                  <a class="mdc-drawer-link" href="pages/ui-features/typography.html">
                    Produtos
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div class="mdc-list-item mdc-drawer-item">
            <a class="mdc-drawer-link" href="pages/tables/basic-tables.html">
              <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">grid_on</i>
              Loja
            </a>
          </div>
          <div class="mdc-list-item mdc-drawer-item">
            <a class="mdc-drawer-link" href="pages/charts/chartjs.html">
              <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">pie_chart_outlined</i>
              Estatisticas
            </a>
          </div>
          <div class="mdc-list-item mdc-drawer-item">
            <a class="mdc-expansion-panel-link" href="#" data-toggle="expansionPanel" data-target="sample-page-submenu">
              <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">pages</i>
              Cupons
              <i class="mdc-drawer-arrow material-icons">chevron_right</i>
            </a>
            <div class="mdc-expansion-panel" id="sample-page-submenu">
              <nav class="mdc-list mdc-drawer-submenu">
                <div class="mdc-list-item mdc-drawer-item">
                  <a class="mdc-drawer-link" href="pages/samples/blank-page.html">
                    Nova campanha
                  </a>
                </div>
                <div class="mdc-list-item mdc-drawer-item">
                  <a class="mdc-drawer-link" href="pages/samples/403.html">
                    Ver cupons
                  </a>
                </div>
                <div class="mdc-list-item mdc-drawer-item">
                  <a class="mdc-drawer-link" href="pages/samples/404.html">
                    Ver campanhas
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div class="mdc-list-item mdc-drawer-item">
            <a class="mdc-drawer-link" href="https://www.bootstrapdash.com/demo/material-admin-free/jquery/documentation/documentation.html" target="_blank">
              <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">description</i>
              Tutoriais
            </a>
          </div>
        </nav>
      </div>
      <div class="profile-actions">
        <a href="javascript:;">Configurações</a>
        <span class="divider"></span>
        <a href="javascript:;">Sair</a>
      </div>
      <div class="mdc-card premium-card">
        <div class="d-flex align-items-center">
          <div class="mdc-card icon-card box-shadow-0">
            <i class="mdi mdi-shield-outline"></i>
          </div>
          <div>
            <p class="mt-0 mb-1 ml-2 font-weight-bold tx-12">Tilevu Pro</p>
            <p class="mt-0 mb-0 ml-2 tx-10">Pro available</p>
          </div>
        </div>
        <p class="tx-8 mt-3 mb-1">Mais recursos, suporte 24/7</p>
        <p class="tx-8 mb-3">Pro Light R$49</p>
        <a href="https://www.bootstrapdash.com/product/material-design-admin-template/" target="_blank">
                      <span class="mdc-button mdc-button--raised mdc-button--white">Atualizar para Pro</span>
                  </a>
      </div>
    </div>
  </aside>
