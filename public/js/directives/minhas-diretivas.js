angular.module('minhasDiretivas', [])
.directive('meuPainel', function (){
	
	var ddo = {};
	//A - Atribute E - Element
	ddo.restric = "AE";
	
	// scope private
	ddo.scope = {
		titulo: '@'
	};
	
	// mater elementos filho
	ddo.transclude = true;
	
	ddo.templateUrl = 'js/directives/meu-painel.html';
	
	return ddo;
})
.directive('minhaFoto', function (){
	
	var ddo = {};
	//A - Atribute E - Element
	ddo.restric = "AE";
	
	// scope private
	ddo.scope = {
		url: '@'
	};
	
	// mater elementos filho
	ddo.transclude = true;
	
	ddo.templateUrl = 'js/directives/minha-foto.html';
	
	return ddo;
})
.directive('meuBotaoPerigo', function(){
	
	var ddo = {};
	
	ddo.restric = "E";
	ddo.scope = {
			nome: '@',
            acao : '&'
	}
	ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

    return ddo;
})
.directive('meuFocus', function() {
    var ddo = {};
    ddo.restrict = "A";
    ddo.scope = {
    	//Usaremos =, que criará uma relação bidirecional, isto é, FotoController e a diretiva meuFocus trabalharão com a mesma referência para $scope.focado
    	//Se focado mudar na diretiva, mudará no controller, se mudar no controller, mudará na diretiva:		
        focado : '='
    };
    ddo.link = function(scope, element) {
    	 scope.$watch('focado', function() {
             // executado toda vez que o valor mudar
             if (scope.focado) {
            	 element[0].focus();
                 scope.focado = false;
                // se mudou e é verdadeiro, o elemento deve ganhar o foco
             } 
         });
    	 /* 2º possibilidade usando barramento de eventos (event bus) do Angular.
	    	 scope.$on('fotoCadastrada', function() {
	             element[0].focus();
	         });
         */
    };

    return ddo;
});

/*
Usamos @ quando queremos realizar uma cópia do valor passado para a diretiva no HTML para dentro do escopo isolado 
na diretiva. Essa cópia é sempre um valor em string.

Usamos & geralmente quando queremos executar dentro de uma diretiva uma função que pertence a um escopo pai, 
o de um controller.

Usamos = quando queremos que tanto a diretiva quanto o controller acessem o mesmo dado, isto é, qualquer alteração 
no escopo privado da diretiva afetará a propriedade do controller e qualquer alteração nesta propriedade no controller 
afetará a diretiva. Temos aqui uma comunicação bidirecional.
*/

/*
Diretivas possuem a propriedade link, cuja função nos dá acesso ao elemento do DOM no qual ela foi 
adicionada na marcação HTML, inclusive ao escopo privado da diretiva. 
É nela que manipulamos DOM quando necessário.
*/