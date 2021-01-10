 {
  description = "A flake for the website dev environment";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs }: {
    devShell.x86_64-linux =
      with import nixpkgs { system = "x86_64-linux"; };
      mkShell {
        buildInputs = [ hugo ];
        # shellHook = "fish";
      };
  };
}         
