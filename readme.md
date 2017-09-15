# Noren

## Media Queries

|name  |meaning                  |scope of width (px)|
|:----:|:-----------------------:|------------------:|
|`g`   |global                   |any                |
|`xs`  |`$xs` or less            |<  321             |
|`sm`  |`$sm` or less            |<  541             |
|`md`  |`$md` or less            |<  721             |
|`lg`  |`$lg` or less            |<  961             |
|`xl`  |`$xl` or less            |< 1201             |
|`sx`  |more than `$xs`          |>  320             |
|`ms`  |more than `$sm`          |>  540             |
|`dm`  |more than `$md`          |>  720             |
|`gl`  |more than `$lg`          |>  960             |
|`lx`  |more than `$xl`          |>  1200            |
|`sxsm`|between `$xs+1` and `$sm`|321 -  540         |
|`sxmd`|between `$xs+1` and `$md`|321 -  720         |
|`sxlg`|between `$xs+1` and `$lg`|321 -  960         |
|`sxxl`|between `$xs+1` and `$xl`|321 - 1200         |
|`msmd`|between `$sm+1` and `$md`|541 -  720         |
|`mslg`|between `$sm+1` and `$lg`|541 -  960         |
|`msxl`|between `$sm+1` and `$xl`|541 - 1200         |
|`dmlg`|between `$dm+1` and `$lg`|721 -  960         |
|`dmxl`|between `$md+1` and `$xl`|721 - 1200         |
|`glxl`|between `$lg+1` and `$xl`|961 - 1200         |
