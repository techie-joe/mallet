{%- assign nl="
" %}
{%- assign word_key = "[0] key,[1] key,[n] keys" %}
{%- assign word_character = "[0] character,[1] character,[n] characters" %}

{%- assign _tab = include.tab | default: "" %}
{%- assign _pad = include.pad | default: "" %}
{%- if include.tab != nil %}{% assign _tab = include.tab %}{%- endif %}
{%- if include.pad != nil %}{% assign _pad = include.pad %}{%- endif %}

{%- assign _truncate = include.truncate | default: 50 %}

{%- assign _include = include.include | default: "" | split: "," %}
{%- assign _exclude = include.exclude | default: "" | split: "," %}
{%- assign _bloi = include.bloi | split: "," %}
{%- assign _blok = include.blok | split: "," %}
{%- assign _bloc = include.bloc | split: "," %}
{%- assign _blob = include.blob | split: "," %}
{%- assign _json = include.json | split: "," %}
{%- assign _ref  = include.ref_id | split: "," %}

{%- assign _bloi = _bloi | push: "size" %}
{%- assign _blok = _blok | push: "keys" %}
{%- assign _blob = _blob | push: "content,excerpt,output" | join:"," | split:"," %}
{%- assign _json = _json | push: "excerpt_separator" %}
{%- assign _ref  = _ref  | push: "previous,next,owner" | join:"," | split:"," %}

{%- if include.val.keys %}
  {%- assign _keys = include.val.keys | sort %}
  {%- for key in _keys %}
    {%- unless _exclude contains key or _include contains key %}
    {%- assign _include = _include | push: key %}
    {%- endunless %}
  {%- endfor %}
{%- elsif include.val.size %}
  {%- for _val in include.val %}
    {%- assign key = _val[0] %}
    {%- unless _exclude contains key or _include contains key %}
    {%- assign _include = _include | push: key %}
    {%- endunless %}
  {%- endfor %}
{%- endif %}

{%- assign n = 0 %}
{%- for key in _include %}
{%- if _exclude contains key %}{% continue %}{%- endif %}
{%- assign _val = include.val[key] %}
{%- if n > 0 %} {{- nl -}} {%- endif %}
{{- _tab -}} {%- include label.md text=key pad=_pad %}{{-' : '-}}
{%- if    _val == 0     -%} {{ '0' }}
{%- elsif _val == false -%} {{ 'false' }}
{%- elsif _val == nil   -%} {{ '[nil]' }}
{%- elsif _val == blank -%} {{ '[blank]' }}
{%- elsif _val == empty -%} {{ '[empty]' | append: _val }}
{%- elsif _bloi contains key -%} [{%- include plural.md val=_val %}]
{%- elsif _blok contains key -%} [{%- include plural.md val=_val word=word_key %}]
{%- elsif _bloc contains key -%} [{%- include plural.md val=_val.keys word=word_key %}]
{%- elsif _blob contains key -%} [{%- include plural.md val=_val word=word_character %}]
{%- elsif _ref contains key -%} [{{ _val.id }}]
{%- elsif _json contains key -%} {{ _val | jsonify }}
{%- else -%}
  {%- assign _json_val = _val | jsonify %}
  {%- if _json_val.size > _truncate -%} # {{ _json_val | truncate: _truncate }}[{{ _json_val.size }}]
  {%- else -%} {{ _val }}
  {%- endif %}
{%- endif %}
{%- assign n = n | plus: 1 %}
{%- endfor %}
{%- if n == 0 -%} # its empty {%- endif %}

{%- assign _peek = include.peek | default: "" | split: "," %}
{%- for key in _peek %}
{{- nl -}} {{- _tab -}} {{- key | append:': '-}}
{%- assign _val = include.val[key] %}
{%- include peek.md val=_val %}
{%- if _val %}
{{- nl -}} {{- _tab -}} {{'peek: # '-}} {{ _val | truncate: _truncate }}
{%- endif %}
{%- endfor %}