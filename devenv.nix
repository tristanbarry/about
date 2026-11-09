{ pkgs, ... }:
{
  packages = with pkgs; [
    pandoc
    texlive.combined.scheme-medium
  ];
}