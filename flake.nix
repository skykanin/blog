 {
  description = "A flake for the website dev environment";

  inputs = {
    # Unofficial library of utilities for managing Nix Flakes.
    flake-utils.url = "github:numtide/flake-utils";

    # Nix package set
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, flake-utils, nixpkgs }:
    flake-utils.lib.eachDefaultSystem (system: {
      devShells.default =
        let pkgs = nixpkgs.legacyPackages.${system};
        in pkgs.mkShell {
          name = "dev-shell";
          buildInputs = with pkgs; [ hugo ];
        };
  });
}         
