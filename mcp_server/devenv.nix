{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/basics/
  env.GREET = "devenv";

  # https://devenv.sh/packages/
  packages = [ pkgs.git pkgs.pnpm pkgs.nodejs_24 pkgs.wrangler pkgs.patchelf ];

  # https://devenv.sh/languages/
  # languages.rust.enable = true;

  # https://devenv.sh/processes/
  # processes.dev.exec = "${lib.getExe pkgs.watchexec} -n -- ls -la";

  # https://devenv.sh/services/
  # services.postgres.enable = true;

  # https://devenv.sh/scripts/
  scripts.hello.exec = ''
    echo hello from $GREET
  '';

  scripts.patch-workerd.exec = ''
    workerd=$(find node_modules/.pnpm -path '*/bin/workerd' -type f -print -quit)
    if [ -n "$workerd" ]; then
      patchelf --set-interpreter "${pkgs.glibc}/lib/ld-linux-x86-64.so.2" "$workerd"
    fi
  '';

  scripts.dev.exec = ''
    patch-workerd
    npx wrangler dev
  '';

  # https://devenv.sh/basics/
  # enterShell = ''
  #   hello         # Run scripts directly
  #   git --version # Use packages
  # '';

  # https://devenv.sh/tasks/
  # tasks = {
  #   "myproj:setup".exec = "mytool build";
  #   "devenv:enterShell".after = [ "myproj:setup" ];
  # };

  # https://devenv.sh/tests/
  #  enterTest = ''
  #    echo "Running tests"
  #    git --version | grep --color=auto "${pkgs.git.version}"
  #  '';

  # https://devenv.sh/git-hooks/
  # git-hooks.hooks.shellcheck.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
