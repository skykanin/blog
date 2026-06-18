{
  description = "A flake for the website dev environment";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  outputs = {nixpkgs, ...}: let
    forAllSystems = function:
      nixpkgs.lib.genAttrs [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
      ] (system: function nixpkgs.legacyPackages.${system});
  in {
    devShells = forAllSystems (pkgs: {
      default = pkgs.mkShell {
        name = "blog";

        packages = with pkgs; [
          nodejs
          nixd
          hugo
        ];
      };
    });

    formatter = forAllSystems (pkgs: pkgs.alejandra);
  };
}
