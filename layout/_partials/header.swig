<div class="site-meta {% if theme.custom_logo.enabled %}custom-logo{% endif %}">
  {% if theme.custom_logo.image and theme.scheme === 'Muse' %}
    <div class="site-meta-headline">
      <a>
        <img class="custom-logo-image" src="{{ theme.custom_logo.image }}"
             alt="{{ config.title }}"/>
      </a>
    </div>
  {% endif %}

  <div class="custom-logo-site-title">
    <a href="{{ config.root }}"  class="brand" rel="start">
      <span class="site-title">{{ config.title }}</span>
    </a>
  </div>
  <p class="site-subtitle">{{ config.subtitle }}</p>
</div>

<div class="site-nav-toggle">
  <button>
    <span class="btn-bar"></span>
    <span class="btn-bar"></span>
    <span class="btn-bar"></span>
  </button>
</div>

<nav class="site-nav">
  {% if theme.menu %}
    <ul id="menu" class="menu">
      {% for name, path in theme.menu %}
        {% set itemName = name.toLowerCase() %}
        <li class="menu-item menu-item-{{ itemName }}">
          <a href="{{ url_for(path) }}" rel="section">
            {% if theme.menu_icons.enable %}
              <i class="menu-item-icon fa fa-fw fa-{{theme.menu_icons[itemName] | default('question-circle') | lower }}"></i> <br />
            {% endif %}
            {{ __('menu.' + itemName) }}
          </a>
        </li>
      {% endfor %}

      <li class="menu-item menu-item-search">
        <a href="https://www.google.com.hk/search?q=site%3A{{ config.url }}{{ config.root }}" class="popup-trigger">
          <i class="menu-item-icon fa fa-search fa-fw"></i>{{ __('menu.search') }}
        </a>
      </li>
    </ul>
  {% endif %}
</nav>

